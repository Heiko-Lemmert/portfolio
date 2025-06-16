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
  @ViewChild('avatar')
  avatar!: ElementRef<HTMLDivElement>;

  startScale = false;
  frontend = 'Frontend Developer'

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
