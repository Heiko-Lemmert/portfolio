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
  /** Injected local storage service. */
  private localService = inject(LocalStorageService);
  /** Injected global data service. */
  private globalData = inject(GlobalDataService);
  /** Injected social links service. */
  socialData = inject(SociallinksService);
  /** HttpClient used to post contact form data. */
  http = inject(HttpClient);
  /** Contact form model. */
  contactData = {
    name: "",
    mail: "",
    message: ""
  }
  /** Validation pattern for name fields. */
  namePattern: string = '^[A-Za-zÄÖÜäöüß]+(?:[ \-][A-Za-zÄÖÜäöüß]+)*$';
  /** Validation pattern for email addresses. */
  mailPattern: string = '^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  email: string = '';
  /** Current light mode state. */
  lightModeActivated: Boolean = false;
  /** Subscription for light mode observable. */
  lightModeSub!: Subscription;
  /** Whether a send-mail toast is currently visible. */
  sendMail: Boolean = false;
  /** Flag to toggle mail sending in test mode. */
  mailTest = false;

  ngOnInit(): void {
    // Subscribe to global light mode changes
    this.lightModeSub = this.globalData.lightModeActivated$.subscribe(value => {
      this.lightModeActivated = value;
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

  /**
   * Handle contact form submission.
   *
   * - If the form is submitted and valid:
   *   - If mailTest is false: send a POST request to the configured endpoint. On success the form
   *     is reset and a confirmation toast is shown. Errors are logged to the console.
   *   - If mailTest is true: simulate a successful send by resetting the form and showing the toast.
   * - If the form is invalid or not submitted: mark all controls as touched to reveal validation messages.
   *
   * @param ngForm - The NgForm instance for the contact form.
   * @returns void
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.resetFormAndNotify(ngForm);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
        this.resetFormAndNotify(ngForm);
    } else {
        this.markAllAsTouched(ngForm);
    }
  }

  /**
   * Reset the given form and show a confirmation toast.
   * @param form - The NgForm instance to reset.
   */
  private resetFormAndNotify(form: NgForm): void {
    form.resetForm();
    this.showToast();
  }

  /**
   * Mark all controls in the given form as touched and dirty so validation
   * messages become visible.
   * @param form - form whose controls should be marked
   */
  private markAllAsTouched(form: NgForm) {
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
  }

  /**
   * Show a transient toast that confirms the mail was (simulated) sent.
   */
  showToast() {
    this.sendMail = true;
    setTimeout(() => {
      this.sendMail = false;
    }, 2500)
  }
}
