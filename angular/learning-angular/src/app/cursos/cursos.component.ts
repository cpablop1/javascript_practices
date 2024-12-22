import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {
  public title: string;
  public name: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'Cursos';
    this.name = '';
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.name = params['name'];
    });
  }

  redirect(){
    this._router.navigate(['/zapatillas']);
  }
}