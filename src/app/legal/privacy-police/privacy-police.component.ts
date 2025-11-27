import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import { GlobalDataService } from '../../services/global-data.service';

@Component({
  selector: 'app-privacy-police',
  imports: [TranslocoDirective, RouterLink],
  templateUrl: './privacy-police.component.html',
  styleUrl: './privacy-police.component.scss'
})
export class PrivacyPoliceComponent {
  /** Global data service exposes domain and contact information. */
  readonly globalData = inject(GlobalDataService);
  /** URL to the imprint page derived from the configured domain. */
  url = `${this.globalData.domain}/imprint`
  /** Address object coming from the global data service. */
  address = this.globalData.address;

}
