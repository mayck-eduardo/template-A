import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Site modelo fictício para portfólio — sem vínculo com empresa real
export default defineConfig({
  site: 'https://mayck-eduardo.github.io',
  base: '/template-A',
  outDir: 'docs',
  vite: {
    plugins: [tailwindcss()],
  },
});