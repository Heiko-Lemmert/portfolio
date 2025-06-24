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
  @ViewChild('desc') descElemt!: ElementRef;
  @Input() index!: number;

  @Input() project!: {
    name: string;
    description: string;
    repositorie: string;
    live: string;
    techstack: string[];
    cover: string;
  }

  isHover: boolean = false;

  isOdd(index: number): boolean {
    return index % 2 !== 0;
  }

  ngAfterViewInit(): void {
    const target = this.descElemt.nativeElement;
    if (this.isOdd(this.index)) {
      target.style.setProperty('--direction', 140 + 'px');
    } else {
      target.style.setProperty('--direction', -140 + 'px');
    }
  }
}
