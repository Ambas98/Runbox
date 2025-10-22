#!/usr/bin/env node
/**
 * importInitialContent.js
 *
 * Lee back/initial-content/content.json y crea/actualiza los Single Types y Blog posts
 * en una instancia Strapi usando la REST API.
 *
 * Requisitos:
 *  - NODE >= 16
 *  - npm i axios
 *
 * Uso:
 *  STRAPI_URL=http://localhost:1337 STRAPI_TOKEN=<api-token> node importInitialContent.js
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');

const CONTENT_PATH = path.resolve(__dirname, '..', 'initial-content', 'content.json');
const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN || '';

if (!fs.existsSync(CONTENT_PATH)) {
  console.error('No se encontró content.json en back/initial-content. Asegúrate de que exista.');
  process.exit(1);
}

const content = JSON.parse(fs.readFileSync(CONTENT_PATH, 'utf8'));

const axiosInstance = axios.create({
  baseURL: STRAPI_URL,
  headers: {
    'Content-Type': 'application/json',
    ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {})
  },
  timeout: 30_000,
});

// For file upload we need a separate axios instance without enforced JSON content-type
const axiosUploadInstance = axios.create({
  baseURL: STRAPI_URL,
  headers: {
    ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {})
  },
  timeout: 60_000,
});

// Dry-run mode: when true, the script will only log actions instead of performing network calls
const DRY_RUN = (process.env.DRY_RUN === 'true' || process.env.DRY_RUN === '1');
function isDryRun() { return DRY_RUN; }

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function withRetry(fn, name = 'request', maxRetries = 5, initialDelay = 1000) {
  let attempt = 0;
  let delay = initialDelay;
  while (attempt <= maxRetries) {
    try {
      return await fn();
    } catch (err) {
      attempt++;
      const status = err?.response?.status;
      const retryable = !status || status >= 500 || status === 429;
      console.warn(`${name} failed (attempt ${attempt}): ${err.message}${status ? ' (status: ' + status + ')' : ''}`);
      if (!retryable || attempt > maxRetries) {
        throw err;
      }
      console.log(`Retrying ${name} after ${delay}ms...`);
      await sleep(delay);
      delay *= 2; // exponential backoff
    }
  }
}

async function createOrUpdateSingleType(singularName, data) {
  // For Strapi single types, use PUT to /api/{singularName}
  const url = `/api/${singularName}`;
  if (isDryRun()) {
    console.log(`[DRY-RUN] Would PUT ${url} with data:`);
    console.log(JSON.stringify(data, null, 2));
    return { data: { id: singularName, attributes: data } };
  }
  return withRetry(async () => {
    const res = await axiosInstance.put(url, { data });
    return res.data;
  }, `PUT ${url}`);
}

async function createCollectionItem(collectionName, data) {
  const url = `/api/${collectionName}`;
  if (isDryRun()) {
    console.log(`[DRY-RUN] Would POST ${url} with data:`);
    console.log(JSON.stringify(data, null, 2));
    return { data: { id: Math.floor(Math.random() * 90000) + 10000, attributes: data } };
  }
  return withRetry(async () => {
    const res = await axiosInstance.post(url, { data });
    return res.data;
  }, `POST ${url}`);
}

async function uploadMediaFromUrl(fileUrl, fileNameHint = '') {
  // Downloads the file and uploads to Strapi via /api/upload
  return withRetry(async () => {
    console.log(`Downloading media ${fileUrl}`);
    const response = await axios({ url: fileUrl, method: 'GET', responseType: 'arraybuffer', timeout: 60000 });
    const buffer = Buffer.from(response.data, 'binary');
    const fileName = fileNameHint || path.basename(new URL(fileUrl).pathname) || 'upload.jpg';

    const FormData = require('form-data');
    const form = new FormData();
    form.append('files', buffer, { filename: fileName, contentType: response.headers['content-type'] || 'image/jpeg' });

    // If Strapi expects additional fields, they can be added here (e.g., 'ref' 'refId').
    const uploadRes = await axiosUploadInstance.post('/api/upload', form, {
      headers: { ...form.getHeaders() },
      maxContentLength: Infinity,
      maxBodyLength: Infinity
    });

    if (!Array.isArray(uploadRes.data) && !uploadRes.data?.[0]) {
      // Strapi v4 returns array; handle possible object wrapper
      return uploadRes.data;
    }

    // Return the uploaded media info (id and url)
    const uploaded = Array.isArray(uploadRes.data) ? uploadRes.data[0] : uploadRes.data[0];
    console.log(`Uploaded media ${fileUrl} -> id=${uploaded.id}`);
    return uploaded;
  }, `UPLOAD ${fileUrl}`);
}

// Explicit list of media field names used across pages/components.
// This list was derived from the frontend codebase to ensure high precision.
const MEDIA_FIELD_NAMES = new Set([
  'heroBackgroundImage',
  'mapImage',
  'coverageMapImage',
  'featuredImage',
  'photo',
  'Imagen',          // Spanish block field (capital I) used in PageTemplate
  'image',
  'thumbnail',
  'metaImage',
  'ogImage',
  'logo',
  'avatar',
  'videoThumbnail',
  'storyImage'
]);

function looksLikeMediaField(keyName, value) {
  if (!keyName || typeof keyName !== 'string') return false;

  // Exact match against the explicit set
  if (MEDIA_FIELD_NAMES.has(keyName)) return true;

  // Broad heuristic: keys that look like image fields
  if (/_?image$|_?img$|_?photo$|_?picture$|_?media$|_?thumbnail$/i.test(keyName)) return true;

  // As a secondary safety, if the value is a direct image URL and the key contains an image-related term
  if (typeof value === 'string' && /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i.test(value)) {
    const lower = keyName.toLowerCase();
    if (lower.includes('image') || lower.includes('img') || lower.includes('photo') || lower.includes('thumbnail')) return true;
  }

  return false;
}

async function processMediaInObject(obj) {
  if (!obj || typeof obj !== 'object') return obj;

  if (Array.isArray(obj)) {
    const res = [];
    for (const item of obj) {
      res.push(await processMediaInObject(item));
    }
    return res;
  }

  const out = { ...obj };
  for (const [key, val] of Object.entries(obj)) {
    if (val == null) continue;
    // If field looks like media and is a URL, download & upload, replace with media id
    if (looksLikeMediaField(key, val)) {
      if (typeof val === 'string' && /^https?:\/\//i.test(val)) {
        try {
          const uploaded = await uploadMediaFromUrl(val);
          // Replace with Strapi relation object
          out[key] = uploaded.id ? uploaded.id : uploaded;
        } catch (err) {
          console.warn(`Failed to upload media for field ${key}: ${err.message}`);
          // keep original URL on failure
          out[key] = val;
        }
        continue;
      }
    }

    // Recurse into nested objects
    if (typeof val === 'object') {
      out[key] = await processMediaInObject(val);
    } else {
      out[key] = val;
    }
  }
  return out;
}

async function importAll() {
  const summary = { created: {}, errors: {} };

  // Iterate keys in content.json
  for (const [key, value] of Object.entries(content)) {
    try {
      // Pre-process media fields in the value object recursively
      const processedValue = await processMediaInObject(value);
      if (key === 'blog-posts' && Array.isArray(value)) {
        summary.created['blog-posts'] = [];
        for (const item of value) {
          console.log(`Creating blog post: ${item.title}`);
          const processedItem = await processMediaInObject(item);
          const res = await createCollectionItem('blog-post', processedItem);
          summary.created['blog-posts'].push(res);
          console.log(`Created blog post: ${item.title}`);
        }
      } else {
        // Assume single type; use the key as singularName (e.g., 'home-page')
        console.log(`Upserting single type: ${key}`);
        const res = await createOrUpdateSingleType(key, processedValue);
        summary.created[key] = res;
        console.log(`Upserted ${key}`);
      }
    } catch (err) {
      console.error(`Error importing ${key}:`, err.message || err);
      summary.errors[key] = (err.response && err.response.data) ? err.response.data : err.message;
    }
  }

  console.log('\nImport summary:');
  console.log(JSON.stringify(summary, null, 2));
}

importAll().catch(err => {
  console.error('Fatal error importing content:', err.message || err);
  process.exit(1);
});
