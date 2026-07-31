import { Component } from '@angular/core';
import { Produtos } from './produtos/produtos';

@Component({
  selector: 'app-root',
  imports: [Produtos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}