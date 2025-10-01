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
  readonly globalData = inject(GlobalDataService);
  url = `${this.globalData.domain}/imprint`


}
