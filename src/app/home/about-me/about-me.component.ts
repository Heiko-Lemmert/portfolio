import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule, FormsModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  @ViewChild('avatar')
  avatar!: ElementRef<HTMLDivElement>;

  startScale = false;
  returnScale = false;

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
