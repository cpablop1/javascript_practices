import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Importing global settings
import { Global } from '../../services/global';
// Importing models
import { Project } from '../../models/project';

// Importing services
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  // Class attributes
  public projects: Project[];
  public api: string;
  // Class constructor
  constructor(
    private _projectService: ProjectService
  ) {
    // Code here...
    this.projects = [];
    this.api = Global.api;
  }

  ngOnInit(): void {
    // Code here...
    this.getProjects();
  }

  getProjects() {
    this._projectService.getProjects().subscribe(
      response => {
        if(response.projects){
          this.projects = response.projects;

          console.log(this.projects);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
