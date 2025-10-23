import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBloqueTexto extends Struct.ComponentSchema {
  collectionName: 'components_blocks_bloque_textos';
  info: {
    category: 'Blocks';
    description: 'Un bloque simple para texto enriquecido y t\u00EDtulos.';
    displayName: 'BloqueTexto';
    icon: 'text-width';
  };
  attributes: {
    Texto: Schema.Attribute.RichText & Schema.Attribute.Required;
    Titulo: Schema.Attribute.String;
  };
}

export interface ContentContactInfoItem extends Struct.ComponentSchema {
  collectionName: 'components_content_contact_info_items';
  info: {
    category: 'Content';
    description: 'Contact information entries';
    displayName: 'ContactInfoItem';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ContentCoverageRegion extends Struct.ComponentSchema {
  collectionName: 'components_content_coverage_regions';
  info: {
    category: 'Content';
    description: 'Regional coverage details';
    displayName: 'CoverageRegion';
  };
  attributes: {
    allCities: Schema.Attribute.JSON;
    color: Schema.Attribute.String;
    delivery: Schema.Attribute.String;
    mainCities: Schema.Attribute.JSON;
    region: Schema.Attribute.String;
  };
}

export interface ContentCtaInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_content_cta_info_cards';
  info: {
    category: 'Content';
    description: 'Cards used in CTA section';
    displayName: 'CtaInfoCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContentFeature extends Struct.ComponentSchema {
  collectionName: 'components_content_features';
  info: {
    category: 'Content';
    description: 'Simple feature with icon, title and description';
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContentProcedureStep extends Struct.ComponentSchema {
  collectionName: 'components_content_procedure_steps';
  info: {
    category: 'Content';
    description: 'Steps for contact/procedure flow';
    displayName: 'ProcedureStep';
  };
  attributes: {
    color: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContentTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_content_team_members';
  info: {
    category: 'Content';
    description: 'Team member with photo';
    displayName: 'TeamMember';
  };
  attributes: {
    experience: Schema.Attribute.String;
    name: Schema.Attribute.String;
    photo: Schema.Attribute.Media;
    position: Schema.Attribute.String;
  };
}

export interface ContentValueItem extends Struct.ComponentSchema {
  collectionName: 'components_content_value_items';
  info: {
    category: 'Content';
    description: 'Company values like mission, commitment';
    displayName: 'ValueItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo';
  info: {
    category: 'Shared';
    description: 'SEO metadata component';
    displayName: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media;
    metaKeywords: Schema.Attribute.JSON;
    metaTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.bloque-texto': BlocksBloqueTexto;
      'content.contact_info_item': ContentContactInfoItem;
      'content.coverage_region': ContentCoverageRegion;
      'content.cta_info_card': ContentCtaInfoCard;
      'content.feature': ContentFeature;
      'content.procedure_step': ContentProcedureStep;
      'content.team_member': ContentTeamMember;
      'content.value_item': ContentValueItem;
      'shared.seo': SharedSeo;
    }
  }
}
