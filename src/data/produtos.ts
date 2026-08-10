import type { Produto } from '../types';

// ============================================================
// PRODUTOS — UM ÚNICO LUGAR PARA O CATÁLOGO INTEIRO
// - Imagem:      public/img/produtos/<id>.jpg
// - Galeria:     public/img/produtos/<id>/01.jpg ...
// - Ficha (PDF): public/pdf/<id>.pdf
// - "ordem":     posição no catálogo (sem "ordem" vai para o fim)
// Copie/cole um bloco abaixo para cadastrar mais produtos.
// ============================================================
export const produtos: Produto[] = [
  {
    id: 'produto-1',
    ordem: 1,
    categoria: 'categoria-1',
    nome: 'Produto 1',
    subtitulo: 'Subtítulo do produto 1',
    descricaoTecnica: [
      'Característica técnica 1',
      'Característica técnica 2',
      'Característica técnica 3',
    ],
    opcionais: ['Opcional 1'],
    imagem: '/img/produtos/produto-1.jpg',
    galeria: [],
    pdfUrl: '/pdf/produto-1.pdf',
  },
  {
    id: 'produto-2',
    ordem: 2,
    categoria: 'categoria-2',
    nome: 'Produto 2',
    subtitulo: 'Subtítulo do produto 2',
    descricaoTecnica: [
      'Característica técnica 1',
      'Característica técnica 2',
    ],
    opcionais: [],
    imagem: '/img/produtos/produto-2.jpg',
    galeria: [],
    pdfUrl: '/pdf/produto-2.pdf',
  },
];
