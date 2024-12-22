import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public identified: boolean;

  constructor() {
    this.identified = false
  }

  login(): void{
    this.identified = true;
  }

  logout(): void{
    this.identified = false;
  }

}
