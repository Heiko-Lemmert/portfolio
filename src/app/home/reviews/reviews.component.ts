import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-reviews',
  imports: [TranslocoDirective, CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {

  reviewsData = [
    {
      name: 'Daniel N.',
      initial: 'DN',
      review: 'review-1',
      project: 'Join',
    },
    {
      name: 'Lars S.',
      initial: 'LS',
      review: 'review-2',
      project: 'Join',
    },
    {
      name: 'Daniel L.',
      initial: 'DL',
      review: 'review-3',
      project: 'DA Bubble',
    }
  ];

  reviewName = this.reviewsData[0].name;
  reviewInitial = this.reviewsData[0].initial;
  reviewText = this.reviewsData[0].review;

  isAnimating: boolean = false;
  nextIndex: number | null = null;
  isHovered: boolean = false;

  setReview(index: number) {
    if (index === this.reviewsData.findIndex(r => r.name === this.reviewName) || this.isAnimating) return;
    this.isAnimating = true;
    this.nextIndex = index;
    setTimeout(() => {
      this.reviewName = this.reviewsData[index].name;
      this.reviewInitial = this.reviewsData[index].initial;
      this.reviewText = this.reviewsData[index].review;
      this.isAnimating = false;
      this.nextIndex = null;
    }, 600);
  }

  setActiv(index: number) {
    return index === this.reviewsData.findIndex(r => r.name == this.reviewName);
  }

}
