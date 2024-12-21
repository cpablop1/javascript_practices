import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';

import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';

import { Config } from './models/config';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet, VideojuegoComponent],
  imports: [CommonModule, VideojuegoComponent, ZapatillasComponent, CursosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'learning-angular';
  public show_videogames: boolean = true;

  constructor(){
    this.title = Config.title;
  }

  hideVideogames(value: boolean) {
    this.show_videogames = value;
  }

}
