// ============================================================
// TIPOS COMPARTILHADOS
// Edite somente se precisar de novos campos no produto/categoria.
// ============================================================

export interface Produto {
  /** Identificador único usado na URL: /produtos/<id> (ex.: "ajs-600") */
  id: string;
  /** id da categoria em src/data/categorias.ts */
  categoria: string;
  nome: string;
  /** Subtítulo mostrado no card e na página do produto */
  subtitulo: string;
  /** Lista de itens da ficha técnica */
  descricaoTecnica: string[];
  /** Itens opcionais (pode ser []) */
  opcionais: string[];
  /** Imagem principal em public/img/produtos/<id>.jpg */
  imagem: string;
  /** Fotos extras (opcional): public/img/produtos/<id>/01.jpg */
  galeria?: string[];
  /** Ficha técnica em PDF: public/pdf/<id>.pdf */
  pdfUrl: string;
  /** Posição no catálogo (sem "ordem" vai para o fim) */
  ordem?: number;
}

export interface Categoria {
  id: string;
  nome: string;
  descricao: string;
  /** Imagem do card em public/img/<id>.jpg */
  imagem: string;
}
