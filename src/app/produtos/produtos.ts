import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from './produto';

@Component({
  selector: 'app-produtos',
  imports: [FormsModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})

export class Produtos {

  id: number = 1;

  descricao: string = '';

  valor: number = 0;


  // Armazena todos os produtos criados pelo usuário
  produtos: Produto[] = [];


/* Guarda temporariamente o produto escolhido para alteração*/
  produtoEditando: Produto | null = null;



  adicionarProduto() {


/*
  Verifica se existe um produto selecionado para edição.
  Caso exista, atualiza os dados desse produto.
  Caso não exista, cria um novo produto na lista.
*/
    if (this.produtoEditando) {


      /* Substitui as informações antigas pelas novas informações digitadas*/
      this.produtoEditando.descricao = this.descricao;
      this.produtoEditando.valor = this.valor;


  /*
    Após salvar a alteração, limpa a seleção
    para voltar ao modo de cadastro normal.
  */
      this.produtoEditando = null;


    } else {


      // Monta um novo produto utilizando os dados do formulário
      const produto: Produto = {

        id: this.id,

        descricao: this.descricao,

        valor: this.valor

      };


      // Envia o novo produto para dentro da lista
      this.produtos.push(produto);


      // Cria um novo número de identificação para o próximo cadastro
      this.id++;

    }


    // Deixa o formulário pronto para um novo cadastro
    this.limpar();

  }


/*
  Essa função recebe o produto escolhido na tabela
  e coloca seus dados novamente nos campos do formulário,
  permitindo que o usuário faça alterações.
*/
  editarProduto(produto: Produto) {


/* Define qual item da lista será atualizado*/
    this.produtoEditando = produto;


/* Preenche os campos com os dados atuais do produto selecionado*/
    this.descricao = produto.descricao;

    this.valor = produto.valor;

  }


  excluirProduto(id: number) {


    // Cria uma nova lista removendo o produto escolhido pelo ID
    this.produtos = this.produtos.filter(

      produto => produto.id !== id

    );


    // Caso o produto removido estivesse sendo editado, cancela a edição
    if (this.produtoEditando?.id === id) {

      this.produtoEditando = null;

      this.limpar();

    }

  }



  limpar() {


    // Apaga o texto que estava preenchido no campo descrição
    this.descricao = '';


    // Retorna o campo valor para o estado inicial
    this.valor = 0;

  }

}