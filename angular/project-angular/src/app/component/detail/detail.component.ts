import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';

// Importing global config
import { Global } from '../../services/global';

// Importing services
import { ProjectService } from '../../services/project.service';

// Importing components
import { Project } from '../../models/project';

@Component({
  selector: 'app-detail',
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  // Class attributes
  public api: string;
  public project: Project;
  public year: number;

  // Class constructor
  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.api = Global.api;
    this.year = new Date().getFullYear();
    this.project = new Project('', '', '', '', this.year, '', '');
  }

  ngOnInit(): void {
    // Code here....
    this._route.params.subscribe(params => {
      let id = params['id'];

      this.getProject(id);
    });
  }

  getProject(id: any) {
    // Code here....
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(<any>error);
      }
    );

  }

}
