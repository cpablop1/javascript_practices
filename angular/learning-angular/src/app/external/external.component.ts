import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-external',
  imports: [CommonModule, FormsModule],
  templateUrl: './external.component.html',
  styleUrl: './external.component.css',
  providers: [RequestsService]
})
export class ExternalComponent implements OnInit {
  public user: any;
  public userId: any;
  public date: any;
  public new_user: any;
  public user_saved: any;

  constructor(
    private _requestsService: RequestsService
  ) {
    this.userId = 1;
    this.new_user = {
      "name": "",
      "job": ""
    }
  }

  ngOnInit(): void {
    this.loadUser(this.userId);
    this.date = new Date();
  }

  loadUser(userId: any) {
    this._requestsService.getUser(userId).subscribe(
      result => {
        this.user = result.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form: any){
    this._requestsService.addUser(this.new_user).subscribe(
      response => {
        this.user_saved = response
        console.log(this.user_saved);
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
