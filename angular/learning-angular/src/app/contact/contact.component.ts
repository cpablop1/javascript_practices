import { Component } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Imports models
import { ContactUser } from '../models/contact.user';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public contactUser: ContactUser;

  constructor(){
    this.contactUser = new ContactUser('','','','');
  }

  onSubmit(form: any){
    console.log('Sended form');
    console.log(this.contactUser);
    form.reset();
  }
}
