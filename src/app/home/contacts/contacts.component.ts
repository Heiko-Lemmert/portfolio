import { CommonModule } from '@angular/common';
import { Component, inject, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { TranslocoDirective } from '@jsverse/transloco';
import { SociallinksService } from '../../services/sociallinks.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-contacts',
  imports: [TranslocoDirective, FormsModule, CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements AfterViewInit {
  private localService = inject(LocalStorageService);
  socialData = inject(SociallinksService);

  contactData = {
    name: "",
    mail: "",
    message: ""
  }


  namePattern: string = '^[A-Za-zÄÖÜäöüß]+(?:[ \\-][A-Za-zÄÖÜäöüß]+)*$';
  mailPattern: string = '^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  email: string = '';
  divider = 'h-px bg-linear-to-r from-(--color-opacity) via-(--color-primary) to-(--color-opacity)';
  lightModeOn: Boolean | null = false;

  ngAfterViewInit(): void {
    this.lightModeOn = this.localService.getItem<Boolean>('isLightMode');
    setTimeout(() => {
      console.log('Light', this.lightModeOn);
    }, 1000);
    
    
  }

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

  isLightMode() {
    this.lightModeOn = this.localService.getItem<Boolean>('isLightMode');
  }

}
