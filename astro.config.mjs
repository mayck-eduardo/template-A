import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// ============================================================
// BASE — onde o site será publicado.
//   '/'          -> raiz do domínio
//   '/novosite'  -> subpasta "novosite"
// Pode ser sobrescrita sem tocar no código via variável SITE_BASE:
//   PowerShell: $env:SITE_BASE='/novosite'; npm run dev
// ============================================================
const base = process.env.SITE_BASE || '/';

// ============================================================
// SITE — domínio real de produção (usado pelo sitemap/SEO).
// O comando `npm run init` preenche automaticamente.
// ============================================================
const site = 'https://www.exemplo.com.br';

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
