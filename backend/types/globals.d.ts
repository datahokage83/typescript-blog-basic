import { Strapi } from '@strapi/strapi';

declare global {
  var strapi: Strapi;
}

declare module 'cacheable-request';
declare module 'glob';

export {};
