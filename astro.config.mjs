import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mayck-eduardo.github.io',
  base: '/template-A',
  outDir: './docs',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
