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

  produtos: Produto[] = [];


  adicionarProduto() {

    const produto: Produto = {
      id: this.id,
      descricao: this.descricao,
      valor: this.valor
    };

    this.produtos.push(produto);

    this.id++;

    this.limpar();

  }


  excluirProduto(id: number) {

    this.produtos = this.produtos.filter(
      produto => produto.id !== id
    );

  }


  limpar() {

    this.descricao = '';
    this.valor = 0;

  }

}