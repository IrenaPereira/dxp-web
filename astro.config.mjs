// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Served from GitHub Pages on the apex custom domain digitalexperiments.com.
// Custom apex domain → site is the bare domain and base stays "/".
export default defineConfig({
  site: 'https://digitalexperiments.com',
});
