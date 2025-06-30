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

  // emailRegex = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}';
  // nameRegex = '^[A-Za-zÄÖÜäöüß]+(?:[ \-][A-Za-zÄÖÜäöüß]+)*$';
  // messagaeRegex = /^[\wäöüÄÖÜßÀ-ÿ0-9 .,;:!?'"()\-–—\n\r]{3,1000}$/m;
  namePattern: string = '^[A-Za-zÄÖÜäöüß]+(?:[ \\-][A-Za-zÄÖÜäöüß]+)*$';
  mailPattern: string = '^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  email: string = '';



  isInvalid:boolean = false;
  isValid:boolean = false;


  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }

  // setBorder(ngModel: NgModel) {
  //   const regex:RegExp = this.setRegEx(ngModel);
    
    
  //   if (regex.test(ngModel.value) && ngModel.touched) {
  //     console.log('OK');
  //     this.isValid = true;
  //     this.isInvalid = false;
  //   } else {
  //     //this.isValid = false;
  //     //this.isInvalid = true;
  //     console.log('Bad - Model is: ', ngModel.name );   

  //   }
  // }

  log(event: any) {
    console.log(event);
    
  }

  // setRegEx(ngModel: NgModel) {
  //   switch (ngModel.name) {
  //     case 'name': 
  //     return this.nameRegex;
  //     case 'mail': 
  //     return this.emailRegex;
  //     case 'message': 
  //     return this.messagaeRegex;
  //     default: 
  //     return this.nameRegex;
  //   }
  // };

}
