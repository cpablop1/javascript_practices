import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'app-zapatillas',
  imports: [CommonModule],
  templateUrl: './zapatillas.component.html',
  styleUrl: './zapatillas.component.css'
})
export class ZapatillasComponent implements OnInit {
  public title: string;
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.title = 'Zapatillas';
    this.zapatillas = [
      new Zapatilla('Tenis', 'Puma', 'Blanco', 800, true),
      new Zapatilla('Botas', 'Puma', 'Negro', 1200, true),
      new Zapatilla('Tenis', 'Nike', 'Gris', 950, true),
      new Zapatilla('Tenis', 'I-Run', 'Negro', 550, true)
    ];
  }

  ngOnInit(): void {
      console.log(this.zapatillas);
  }
}
