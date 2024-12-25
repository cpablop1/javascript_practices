import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;

  // Constructor method
  constructor() {
    this.title = 'Cruz Pablo Pérez';
    this.subtitle = 'Software Developer';
    this.email = 'cpablop1@gmail.com';
  }

  ngOnInit(): void {
    // Code here....
  }
}
