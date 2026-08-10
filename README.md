# Modelo de Site Astro (GD Virtual)

Modelo base para criar sites estáticos de clientes com **poucos arquivos** e
**manutenção simples**: todo o conteúdo fica centralizado em `src/data/`.

Estrutura de dados unificada e moderna (Tailwind v4, SEO automático, sitemap,
checagem de tipos no build) — resultado da fusão dos projetos
**Doces Gonçalves** e **Agropulv**.

## Começando

```bash
# 1. Copie o modelo para um novo projeto
npx degit seu-usuario/modelo-site nome-do-cliente

# 2. Instale e configure
cd nome-do-cliente
npm install
npm run init          # responde nome, URL, telefone e cor → preenche a config
npm run dev           # visualiza em http://localhost:4321
```

## Onde cada coisa fica

| O quê | Onde |
| --- | --- |
| Nome, contato, cores, redes, menu | `src/data/site.ts` |
| Categorias / linhas de produto | `src/data/categorias.ts` |
| Todos os produtos (catálogo) | `src/data/produtos.ts` |
| Textos institucionais | `src/pages/sobre.astro` |
| Imagens e PDFs | `public/img/`, `public/pdf/` |
| Cores dos botões/tema | `site.theme` em `src/data/site.ts` |

**Nada de página duplicada por produto**: as páginas `/produtos/<id>` são
geradas automaticamente a partir de `src/data/produtos.ts`.

## Como cadastrar um produto

Em `src/data/produtos.ts`, copie um bloco existente:

```ts
{
  id: 'meu-produto',
  ordem: 3,
  categoria: 'categoria-1',          // id de src/data/categorias.ts
  nome: 'Meu Produto',
  subtitulo: 'Descrição curta exibida nos cards',
  descricaoTecnica: ['Item 1', 'Item 2'],
  opcionais: [],
  imagem: '/img/produtos/meu-produto.jpg',
  galeria: [],
  pdfUrl: '/pdf/meu-produto.pdf',
}
```

A imagem precisa existir em `public/img/produtos/` para aparecer.

## Publicar

```bash
npm run build   # gera dist/ (roda "astro check" antes, sem quebrar o site)
```

Hospedagem em subpasta (ex.: `/novosite`):

```bash
# Windows (PowerShell)
$env:SITE_BASE='/novosite'; npm run dev
# Linux/macOS
SITE_BASE='/novosite' npm run dev
```

Variáveis de ambiente públicas (opcionais) vão em `.env` — veja `.env.example`.

## Transformar em template do Astro (CLI)

O modelo é compatível com o comando oficial do Astro. Suba para um repositório
**público** no GitHub e qualquer pessoa cria um site novo assim:

```bash
npm create astro@latest nome-do-cliente -- --template seu-usuario/modelo-site
```

> O assistente baixa o modelo, renomeia o `package.json` e depois é só
> `npm install && npm run init`.

## Checklist por cliente

1. `npm run init` (nome, URL, telefone, cor principal)
2. Substituir `public/img/logo.svg`, `favicon.svg` e `og-cover.svg`
3. Cadastrar categorias e produtos nos arquivos de `src/data/`
4. Trocar textos em `sobre.astro` e, se necessário, ativar formulário em
   `site.formularioAction`
5. Conferir `latitude`/`longitude` no `site.ts` (mapa no contato)
6. `npm run build` e publicar `dist/`
