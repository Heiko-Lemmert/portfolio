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
  /** Static review entries used in the reviews carousel. */
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

  /** Whether a transition animation is currently running. */
  isAnimating: boolean = false;
  /** Index queued to become active after animation completes. */
  nextIndex: number | null = null;
  /** Hover state used by the UI. */
  isHovered: boolean = false;

  /**
   * Change the active review to the given index with a simple transition.
   * If the requested index is already active or an animation is running,
   * the call is ignored.
   * @param index - index of the review to show
   */
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

  /**
   * Returns true if the passed index corresponds to the currently active review.
   * @param index - index to check
   */
  setActiv(index: number) {
    return index === this.reviewsData.findIndex(r => r.name == this.reviewName);
  }

}
