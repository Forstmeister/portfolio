import { CommonModule } from '@angular/common';
import { NgModule, input } from '@angular/core';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  userDetails = {
    name: '',
    email: '',
    message: '',
    checkbox: false,
  };

  nameValueEntered: boolean = false;
  emailValueEntered: boolean = false;
  messageValueEntered: boolean = false;

  submitForm(form: any): void {
    if (form.valid) {
      console.log('Form data:', this.userDetails);
    }
  }

  inputClicked(value: string) {
    if (value === 'name') {
      this.nameValueEntered = true;
      if (this.userDetails.name.length > 0) {
        this.nameValueEntered = false;
      }
    }
    if (value === 'email') {
      this.emailValueEntered = true;
      if (this.userDetails.email.length > 0) {
        this.emailValueEntered = false;
      }
    }
    if (value === 'message') {
      this.messageValueEntered = true;
      if (this.userDetails.message.length > 0) {
        this.messageValueEntered = false;
      }
    }
  }
}
