// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon()],

  // base: '/ICpEP.SE-MAPUA_Website'
  // site: 'https://Mapua-ICpEP-SE.github.io',
  site: 'https://Mapua-ICpEP-SE.pages.dev',

  adapter: cloudflare(),
});