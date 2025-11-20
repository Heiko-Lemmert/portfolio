import { CommonModule } from '@angular/common';
import { Component, inject, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { TranslocoDirective } from '@jsverse/transloco';
import { SociallinksService } from '../../services/sociallinks.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { GlobalDataService } from '../../services/global-data.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  imports: [TranslocoDirective, FormsModule, CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit, OnDestroy {
  private localService = inject(LocalStorageService);
  private globalData = inject(GlobalDataService);
  socialData = inject(SociallinksService);
  http = inject(HttpClient);

  contactData = {
    name: "",
    mail: "",
    message: ""
  }


  namePattern: string = '^[A-Za-zÄÖÜäöüß]+(?:[ \\-][A-Za-zÄÖÜäöüß]+)*$';
  mailPattern: string = '^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  email: string = '';
  lightModeActivated: Boolean = false;
  lightModeSub!: Subscription
  mailTest = false;

  ngOnInit(): void {
    this.lightModeSub = this.globalData.lightModeActivated$.subscribe(value => {
      this.lightModeActivated = value;
      console.log('Component contacts - light mode is:', this.lightModeActivated);
    })

  }

  ngOnDestroy(): void {
    if (this.lightModeSub) {
      this.lightModeSub.unsubscribe();
    }
  }

  post = {
    endPoint: `${this.globalData.domain}/sendMail.php`,
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
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    } else {
      console.error('Formular ist ungültig.');
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

}
