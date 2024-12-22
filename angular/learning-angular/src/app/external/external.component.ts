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

  constructor(
    private _requestsService: RequestsService
  ) { 
    this.userId = 1;
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
}
