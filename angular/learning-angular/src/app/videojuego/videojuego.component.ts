import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Config } from '../models/config';

@Component({
  selector: 'app-videojuego',
  imports: [],
  templateUrl: './videojuego.component.html',
  styleUrl: './videojuego.component.css'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
  public title: string;
  public list: string;
  public description: string;

  constructor() {
    this.title = 'Componente de Vídeojuegos';
    this.list = 'Listado de los juegos más populares';
    this.description = Config.description;

    //console.log('Componente cargado correctamente....');
  }

  ngOnInit(): void {
    //console.log('OnInit ejecutado!');
  }

  ngDoCheck(): void {
    //console.log('DoCheck ejecutado!');
  }

  ngOnDestroy(): void {
      //console.log('OnDestroy ejecutado!!!');
  }

  changeTitle(){
    this.title = 'New title....'
  }
}
