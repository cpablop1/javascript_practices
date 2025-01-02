import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Import models...
import { Project } from '../../models/project';

// Import services...
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';

//Global settings
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  imports: [FormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string;
  public fileToUpload: Array<File>;

  // Constructor method
  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.title = 'Create project';
    this.project = new Project('', '', '', '', 2024, '', '');
    this.status = '';
    this.fileToUpload = [];
  }

  // Method for creating projects
  onSubmit(form: any) {
    // Code here....
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if (response.project) {

          // Upload image
          this._uploadService.makeFileRequest(Global.api + 'upload-image/' + response.project._id, [], this.fileToUpload, 'image')
            .then((result: any) => {
              console.log(result);
              this.status = 'success';
              // Reset form
              form.reset();
            })

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

  fileChangeEvent(fileInput: any) {
    this.fileToUpload = <Array<File>>fileInput.target.files;
  }
}
