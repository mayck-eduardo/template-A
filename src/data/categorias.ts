import type { Categoria } from '../types';

// ============================================================
// CATEGORIAS / LINHAS DE PRODUTO
// Alimentam os cards da home e agrupam a listagem de produtos.
// ============================================================
export const categorias: Categoria[] = [
  {
    id: 'categoria-1',
    nome: 'CATEGORIA 1',
    descricao: 'Breve descrição da primeira categoria de produtos.',
    imagem: '/img/categoria-1.jpg',
  },
  {
    id: 'categoria-2',
    nome: 'CATEGORIA 2',
    descricao: 'Breve descrição da segunda categoria de produtos.',
    imagem: '/img/categoria-2.jpg',
  },
  {
    id: 'categoria-3',
    nome: 'CATEGORIA 3',
    descricao: 'Breve descrição da terceira categoria de produtos.',
    imagem: '/img/categoria-3.jpg',
  },
];
