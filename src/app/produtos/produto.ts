// Interface que define como deve ser um produto
// Ou seja, todo produto precisa ter esses três campos
export interface Produto {

  // Identificador único do produto
    id: number;

  // Nome ou descrição do produto
    descricao: string;

  // Preço do produto
    valor: number;
  }