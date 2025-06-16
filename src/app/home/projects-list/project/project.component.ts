import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
 @Input() index!: number;

 isOdd(index: number): boolean {
  return index % 2 !== 0;
}
}
