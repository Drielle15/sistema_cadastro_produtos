import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from './produto';
@Component({
  selector: 'app-produtos', // Nome da tag do componente
  imports: [FormsModule], // Importa o módulo de formulários
  templateUrl: './produtos.html', // Arquivo HTML da tela
  styleUrl: './produtos.css', // Arquivo de estilos (CSS)
})
export class Produtos {

  id: number = 1; //ID inicial do primeiro produto
  descricao: string = '';  // Guarda a descrição digitada
  valor: number = 0; // Guarda o valor digitado
   // Lista onde os produtos serão armazenados
  produtos: Produto[] = [];


  adicionarProduto() {
     // Cria um novo objeto com os dados informados pelo usuário
    const produto: Produto = {
      id: this.id,
      descricao: this.descricao,
      valor: this.valor
    };

    // Adiciona o produto na lista
    this.produtos.push(produto);
    // Aumenta o ID para o próximo produto
    this.id++;

    // Limpa os campos do formulário
    this.limpar();

  }


  excluirProduto(id: number) {
     // Remove da lista o produto que possui o ID recebido
    this.produtos = this.produtos.filter(
      produto => produto.id !== id
    );

  }


  limpar() {

     // Limpa a descrição
    this.descricao = '';

     // Volta o valor para 0
    this.valor = 0;

  }

}