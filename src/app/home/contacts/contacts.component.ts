import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-contacts',
  imports: [TranslocoDirective, FormsModule, CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

  contactData = {
    name: "",
    mail: "",
    message: ""
  }

  private emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  private nameRegex = /^[A-ZÄÖÜa-zäöüßà-ÿ'-]{2,40}$/;
  private messagaeRegex = /^[\wäöüÄÖÜßÀ-ÿ0-9 .,;:!?'"()\-–—\n\r]{3,1000}$/m;

  isInvalid:boolean = false;
  isValid:boolean = false;

  @ViewChild('nameElement') nameField!:ElementRef<HTMLInputElement>;
  @ViewChild('mailElement') mailField!:ElementRef<HTMLInputElement>;
  @ViewChild('messageElement') messageField!:ElementRef<HTMLTextAreaElement>;


  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }

  setBorder(ngModel: NgModel) {
    const regex:RegExp = this.setRegEx(ngModel);
    const modelElemt:HTMLInputElement | HTMLTextAreaElement = this.setModelElement(ngModel);
    console.log(modelElemt);
    modelElemt.classList.add
    
    
    if (regex.test(ngModel.value)) {
      console.log('OK');
      this.isValid = true;
      this.isInvalid = false;
    } else {
      this.isValid = false;
      this.isInvalid = true;
      console.log('Bad - Model is: ', ngModel.name );
      console.log(modelElemt);
      

    }

  }

  setRegEx(ngModel: NgModel) {
    switch (ngModel.name) {
      case 'name': 
      return this.nameRegex;
      case 'mail': 
      return this.emailRegex;
      case 'message': 
      return this.messagaeRegex;
      default: 
      return this.nameRegex;
    }
  };

  setModelElement(ngModel: NgModel) {
    switch (ngModel.name) {
      case 'name': 
      return this.nameField.nativeElement;
      case 'mail': 
      return this.mailField.nativeElement;
      case 'message': 
      return this.messageField.nativeElement;
      default: 
      return this.nameField.nativeElement;
    }
  }

}
