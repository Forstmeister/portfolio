import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
export class ContactComponent implements OnChanges {
  userDetails = {
    name: '',
    email: '',
    message: '',
    checkbox: false,
  };

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onNameChange(newValue: string): void {
    console.log('Name changed:', newValue);
  }

  submitForm(form: any): void {
    if (form.valid) {
      console.log('Form data:', this.userDetails);
    }
  }

  test() {
    console.log(this.userDetails);
  }
}
