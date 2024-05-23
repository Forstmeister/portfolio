import { CommonModule } from '@angular/common';
import { NgModule, inject, input } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  NgForm,
} from '@angular/forms';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, PortfolioComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(private router: Router) {}

  http = inject(HttpClient);

  userDetails = {
    name: '',
    email: '',
    message: '',
    checkbox: false,
  };

  @ViewChild('userForm') userForm!: NgForm;

  nameValueEntered: boolean = false;
  emailValueEntered: boolean = false;
  messageValueEntered: boolean = false;
  validEmail: boolean = false;
  submitButtonClicked: boolean = false;

  mailTest = false;

  post = {
    endPoint: 'https://foerster-dev.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.userDetails))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            console.info('send post complete');
            this.router.navigate(['/success']);
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.resetForm();
    }
  }

  submitButton() {
    return (this.submitButtonClicked = true);
  }

  resetForm() {
    this.userDetails.name = '';
    this.userDetails.email = '';
    this.userDetails.message = '';
    this.userDetails.checkbox = false;
    this.nameValueEntered = false;
    this.emailValueEntered = false;
    this.messageValueEntered = false;
    this.validEmail = false;
    this.submitButtonClicked = false;
  }

  isEmailValid(): any {
    if (this.userForm.controls['email']['status'] == 'VALID') {
      this.validEmail = true;
    } else if (this.userForm.controls['email']['status'] == 'INVALID') {
      this.validEmail = false;
    }
  }

  inputClicked(value: string) {
    if (value === 'name') {
      this.nameValueEntered = true;
      if (this.userDetails.name && this.userDetails.name.length > 0) {
        this.nameValueEntered = false;
      }
    }
    if (value === 'email') {
      this.emailValueEntered = true;
      if (this.userDetails.email && this.userDetails.email.length > 0) {
        this.emailValueEntered = false;
        this.isEmailValid();
      }
      if (!this.validEmail) {
        this.emailValueEntered = true;
      }
    }
    if (value === 'message') {
      this.messageValueEntered = true;
      if (this.userDetails.message && this.userDetails.message.length > 0) {
        this.messageValueEntered = false;
      }
    }
  }
}
