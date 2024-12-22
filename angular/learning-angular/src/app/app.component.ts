import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { Config } from './models/config';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet, VideojuegoComponent],
  imports: [CommonModule, RouterModule, RouterOutlet],
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
