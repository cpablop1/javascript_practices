import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Zapatilla } from '../models/zapatilla';

import { ZapatillaService } from '../services/zapatilla.service';

@Component({
  selector: 'app-zapatillas',
  imports: [CommonModule],
  templateUrl: './zapatillas.component.html',
  styleUrl: './zapatillas.component.css',
  providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit {
  public title: string;
  public zapatillas: Array<Zapatilla>;

  constructor(
    private _zapatillaSevice: ZapatillaService
  ) {
    this.title = 'Zapatillas';
    this.zapatillas = new Array();
  }

  ngOnInit(): void {
      this.zapatillas = this._zapatillaSevice.getZapatillas();
      console.log(this.zapatillas);
      alert(this._zapatillaSevice.getText());
  }
}
