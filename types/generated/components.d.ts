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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.bloque-texto': BlocksBloqueTexto;
    }
  }
}
