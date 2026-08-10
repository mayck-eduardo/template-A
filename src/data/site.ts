// ============================================================
// CONFIGURAÇÃO DO SITE — FONTE ÚNICA DE DADOS GERAIS
// Edite aqui nome, contato, cores, redes sociais e navegação.
// O comando `npm run init` já gera este arquivo respondendo a perguntas.
// ============================================================

// Caminho base do site (vem do astro.config.mjs, ex.: '/novosite').
// Sempre termina com '/' para concatenar: `${base}produtos`.
const baseBruto = import.meta.env.BASE_URL;
export const base = baseBruto.endsWith('/') ? baseBruto : `${baseBruto}/`;

export const site = {
  url: 'https://www.exemplo.com.br',
  nome: 'Exemplo',
  nomeCompleto: 'Exemplo Indústria Ltda',
  slogan: 'Slogan ou frase de efeito da marca',
  descricao:
    'Descrição resumida usada no SEO (Google) e no compartilhamento em redes sociais.',
  email: 'contato@exemplo.com.br',
  telefone: '(00) 00000-0000',
  whatsappUrl: 'https://wa.me/5500000000000',

  endereco: {
    logradouro: 'Av. Principal, 1000',
    complemento: 'Distrito Industrial, 15500-000',
    cidade: 'Cidade - UF',
  },

  // Google Maps sem chave de API (usa latitude/longitude).
  latitude: -20.4,
  longitude: -50.0,
  mapaEmbedUrl:
    'https://www.google.com/maps?q=-20.4,-50.0&z=14&output=embed',
  mapaRotaUrl: 'https://www.google.com/maps/dir/?api=1&destination=-20.4,-50.0',

  redesSociais: [
    { nome: 'Instagram', url: 'https://instagram.com/exemplo', iconSrc: '/img/icons/instagram.svg' },
    { nome: 'Facebook', url: 'https://facebook.com/exemplo', iconSrc: '/img/icons/facebook.svg' },
  ],

  // Menu do topo e do rodapé (use '' para a home).
  navegacao: [
    { label: 'HOME', href: '' },
    { label: 'A EMPRESA', href: 'sobre' },
    { label: 'PRODUTOS', href: 'produtos' },
    { label: 'CONTATO', href: 'contato' },
  ],

  // Imagens em public/img (caminhos já prefixados pelo base em runtime).
  logo: '/img/logo.svg',
  logoRodape: '/img/logo.svg',
  imagemOg: '/img/og-cover.svg',
  /** Deixe vazio para usar um gradiente no topo da home */
  imagemHero: '',

  // Formulário de contato (vazio = formulário desativado, usa WhatsApp).
  formularioAction: '',

  // ============================================================
  // TEMA (cores) — basta trocar os hexadecimais para repintar o site
  // ============================================================
  theme: {
    primary: '#00BA34',
    primaryHover: '#009E2C',
    accent: '#f06100',
    dark: '#021E0A',
    bg: '#F2F5F3',
    card: '#FFFFFF',
  },
};
