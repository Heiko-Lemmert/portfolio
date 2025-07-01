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


  namePattern: string = '^[A-Za-zÄÖÜäöüß]+(?:[ \\-][A-Za-zÄÖÜäöüß]+)*$';
  mailPattern: string = '^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  email: string = '';



  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log('Formular ist gültig!', this.contactData);
    } else {
      console.log('Formular ist ungültig.');
      this.markAllAsTouched(ngForm);
    }
  }

  private markAllAsTouched(form: NgForm) {
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
  }


  log(event: any) {
    console.log(event);

  }

}
