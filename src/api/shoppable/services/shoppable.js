'use strict';

/**
 * shoppable service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shoppable.shoppable');
