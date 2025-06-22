import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-reviews',
  imports: [TranslocoDirective],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {

  reviewsData = [
    {
      name: 'Daniel N.',
      review: 'lorem ipsum abat is ed kolom',
      avatar: '',
  }
]

}
