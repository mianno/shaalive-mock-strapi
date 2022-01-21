module.exports = [
  'strapi::errors',
  'strapi::security',
  //'strapi::cors',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      header: '*',
      origin: ['*']
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
];
