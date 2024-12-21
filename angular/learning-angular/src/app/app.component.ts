import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { VideojuegoComponent } from './videojuego/videojuego.component';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet, VideojuegoComponent],
  imports: [VideojuegoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learning-angular';
}
