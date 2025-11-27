import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive, TranslocoDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  /** Current date instance used to derive the year shown in the footer. */
  date = new Date();
  /** Current year number derived from `date`. */
  year = this.date.getFullYear();

}
