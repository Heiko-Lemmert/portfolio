import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-project',
  imports: [CommonModule, TranslocoPipe],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements AfterViewInit {
  /** Reference to the description element used for animation offsets. */
  @ViewChild('desc') descElemt!: ElementRef;
  /** Index of this project in the parent list. */
  @Input() index!: number;

  /** Project metadata provided by the parent component. */
  @Input() project!: {
    name: string;
    description: string;
    repositorie: string;
    live: string;
    techstack: string[];
    cover: string;
  }

  /** Hover state used for UI interactions. */
  isHover: boolean = false;

  /**
   * Returns whether the given index is odd.
   * @param index - index to check
   */
  isOdd(index: number): boolean {
    return index % 2 !== 0;
  }

  /**
   * After view init, set a CSS variable on the description element to adjust
   * animation direction based on the index position.
   */
  ngAfterViewInit(): void {
    const target = this.descElemt.nativeElement;
    if (this.isOdd(this.index)) {
      target.style.setProperty('--direction', 140 + 'px');
    } else {
      target.style.setProperty('--direction', -140 + 'px');
    }
  }
}
