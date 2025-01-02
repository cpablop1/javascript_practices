import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  imports: [FormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string;

  // Constructor method
  constructor(
    private _projectService: ProjectService
  ) {
    this.title = 'Create project';
    this.project = new Project('', '', '', '', 2024, '', '');
    this.status = '';
  }

  // Method for creating projects
  onSubmit(form: any) {
    // Code here....
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if (response.project) {
          this.status = 'success';
          form.reset();
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  ngOnInit(): void {
    // Code here...
  }
}
