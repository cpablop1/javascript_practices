import { Component } from '@angular/core';

@Component({
  selector: 'app-videojuego',
  imports: [],
  templateUrl: './videojuego.component.html',
  styleUrl: './videojuego.component.css'
})
export class VideojuegoComponent {
  public title: string;
  public list: string;
  
  constructor(){
    this.title = 'Componente de Vídeojuegos';
    this.list = 'Listado de los juegos más populares';

    console.log('Componente cargado correctamente....');
  }
}
