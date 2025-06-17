import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-project',
  imports: [CommonModule, TranslocoPipe],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
 @Input() index!: number;

@Input() project!: {
  name:string;
  description:string;
  repositorie:string;
  live:string;
  techstack:string[];
  cover:string;
}

 isOdd(index: number): boolean {
  return index % 2 !== 0;
}
}
