// ============================================================
// npm run init
// Gera src/data/site.ts e ajusta astro.config.mjs respondendo a
// poucas perguntas. Ideal para criar um novo site a partir do modelo.
// ============================================================
import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const rl = createInterface({ input: stdin, output: stdout });

const perguntar = async (texto, padrao = '') => {
  const sufixo = padrao ? ` [${padrao}]` : '';
  const resposta = (await rl.question(`${texto}${sufixo}: `)).trim();
  return resposta || padrao;
};

const soDigitos = (v) => v.replace(/\D/g, '');

const siteTs = ({
  nome,
  nomeCompleto,
  slogan,
  url,
  telefone,
  whatsapp,
  email,
  cidade,
  primary,
}) => `// ============================================================
// CONFIGURAÇÃO DO SITE — FONTE ÚNICA DE DADOS GERAIS
// Arquivo gerado por "npm run init". Edite à vontade depois.
// ============================================================

const baseBruto = import.meta.env.BASE_URL;
export const base = baseBruto.endsWith('/') ? baseBruto : \`\${baseBruto}/\`;

export const site = {
  url: '${url}',
  nome: '${nome}',
  nomeCompleto: '${nomeCompleto}',
  slogan: '${slogan}',
  descricao:
    'Descrição resumida usada no SEO (Google) e no compartilhamento em redes sociais.',
  email: '${email}',
  telefone: '${telefone}',
  whatsappUrl: 'https://wa.me/${whatsapp}',

  endereco: {
    logradouro: 'Av. Principal, 1000',
    complemento: 'Distrito Industrial, 15500-000',
    cidade: '${cidade}',
  },

  latitude: -20.4,
  longitude: -50.0,
  mapaEmbedUrl:
    'https://www.google.com/maps?q=-20.4,-50.0&z=14&output=embed',
  mapaRotaUrl:
    'https://www.google.com/maps/dir/?api=1&destination=-20.4,-50.0',

  redesSociais: [
    { nome: 'Instagram', url: 'https://instagram.com/${nome.toLowerCase()}', iconSrc: '/img/icons/instagram.svg' },
    { nome: 'Facebook', url: 'https://facebook.com/${nome.toLowerCase()}', iconSrc: '/img/icons/facebook.svg' },
  ],

  navegacao: [
    { label: 'HOME', href: '' },
    { label: 'A EMPRESA', href: 'sobre' },
    { label: 'PRODUTOS', href: 'produtos' },
    { label: 'CONTATO', href: 'contato' },
  ],

  logo: '/img/logo.svg',
  logoRodape: '/img/logo.svg',
  imagemOg: '/img/og-cover.svg',
  imagemHero: '',

  formularioAction: '',

  theme: {
    primary: '${primary}',
    primaryHover: '${primary}',
    accent: '#f06100',
    dark: '#021e0a',
    bg: '#f2f5f3',
    card: '#ffffff',
  },
};
`;

async function main() {
  console.log('\n== Modelo de site Astro — configuração inicial ==\n');

  const nome = await perguntar('Nome da marca', 'Exemplo');
  const nomeCompleto = await perguntar('Razão social / nome completo', `${nome} Indústria Ltda`);
  const slogan = await perguntar('Slogan', 'Slogan ou frase de efeito da marca');
  const url = await perguntar('URL de produção (https://...)', 'https://www.exemplo.com.br');
  const telefone = await perguntar('Telefone/WhatsApp com DDD', '(00) 00000-0000');
  const whatsapp = soDigitos(telefone);
  const email = await perguntar('E-mail de contato', `contato@${url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/.*$/, '')}`);
  const cidade = await perguntar('Cidade - UF', 'Cidade - UF');
  const primary = (await perguntar('Cor principal (hexadecimal)', '#00BA34')).toLowerCase();
  const base = await perguntar('Publicar em subpasta? (deixe "/" para raiz)', '/');

  // Gera src/data/site.ts
  const caminhoSite = join(root, 'src', 'data', 'site.ts');
  await writeFile(
    caminhoSite,
    siteTs({ nome, nomeCompleto, slogan, url, telefone, whatsapp, email, cidade, primary }),
    'utf8',
  );

  // Ajusta astro.config.mjs (site e base)
  const caminhoConfig = join(root, 'astro.config.mjs');
  let config = await readFile(caminhoConfig, 'utf8');
  config = config.replace(/const base = .*?;/s, `const base = '${base}';`);
  config = config.replace(/const site = '.*?';/s, `const site = '${url}';`);
  await writeFile(caminhoConfig, config, 'utf8');

  console.log('\n✔ src/data/site.ts gerado');
  console.log('✔ astro.config.mjs ajustado');

  console.log('\n== PRÓXIMOS PASSOS ==');
  console.log('1. Troque as imagens em public/img/ (logo.svg, og-cover, fotos).');
  console.log('2. Cadastre categorias em src/data/categorias.ts.');
  console.log('3. Cadastre produtos em src/data/produtos.ts.');
  console.log('4. Revise os textos das páginas sobre.astro e contato.astro.');
  console.log('5. Rode npm run build (faz a checagem de tipos automaticamente).');
  console.log('\nPronto para o ar! 🚀\n');
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => rl.close());
