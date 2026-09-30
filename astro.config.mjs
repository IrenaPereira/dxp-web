// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Served from GitHub Pages on the custom domain www.digitalexperiments.com
// (apex redirects to www). Custom domain → base stays "/".
export default defineConfig({
  site: 'https://www.digitalexperiments.com',
});
