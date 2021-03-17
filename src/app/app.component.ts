import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoUno: number;
  dadoDos: number;
  gano: boolean;
  urlUno: string;
  urlDos: string;

  constructor(){
    this.dadoUno = Math.floor(Math.random() * (6 - 1) + 1);
    this.dadoDos = Math.floor(Math.random() * (6 - 1) + 1);
    this.gano = false;
    this.urlUno = `../assets/img/dice${this.dadoUno}.png`;
    this.urlDos = `../assets/img/dice${this.dadoDos}.png`;
  }

  cambiarDados():void {
    this.dadoUno = Math.floor(Math.random() * (6 - 1) + 1);
    this.dadoDos = Math.floor(Math.random() * (6 - 1) + 1);
    this.urlUno = `../assets/img/dice${this.dadoUno}.png`;
    this.urlDos = `../assets/img/dice${this.dadoDos}.png`;

    if(this.dadoUno === this.dadoDos){
      this.gano = true;
    } else {
      this.gano = false;
    }
  }
}
