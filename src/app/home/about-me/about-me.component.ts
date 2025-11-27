import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule, FormsModule, TranslocoDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  /**
   * Reference to the avatar container element in the template.
   * Used to determine the avatar's position and size for hover calculations.
   * @type {ElementRef<HTMLDivElement>}
   */
  @ViewChild('avatar')
  avatar!: ElementRef<HTMLDivElement>;

  /**
   * Flag indicating whether the scale animation should start.
   * true = mouse is over the avatar.
   */
  startScale = false;

  /**
   * HostListener, der auf `mousemove` reagiert und prüft, ob sich der Mauszeiger
   * innerhalb der Begrenzungen des Avatar-Elements befindet. Wenn ja, wird
   * `startScale` auf `true` gesetzt, andernfalls auf `false`.
   *
   * @param {MouseEvent} event - Das Mausereignis mit Client-Koordinaten.
   */
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const target = this.avatar.nativeElement.getBoundingClientRect()
    const isOver =
      event.clientX >= target.left &&
      event.clientX <= target.right &&
      event.clientY >= target.top &&
      event.clientY <= target.bottom;

    this.startScale = isOver;
  }
}
