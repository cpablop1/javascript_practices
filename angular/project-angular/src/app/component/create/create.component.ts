import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;

  // Constructor method
  constructor(
    private _projectService: ProjectService
  ) {
    this.title = 'Create project';
    this.project = new Project('', '', '', '', 2024, [''], '');
  }

  // Method for creating projects
  onSubmit(form: any) {
    // Code here....
    console.log(this.project);
  }

  ngOnInit(): void {
    // Code here...
  }
}
