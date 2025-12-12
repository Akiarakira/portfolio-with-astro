// @ts-check
import { defineConfig } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE,
  base: process.env.BASE || '/',
  integrations: [alpinejs(), sitemap(), robotsTxt()],

  vite: {
    plugins: [tailwindcss()]
  }
});