import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-projects-list',
  imports: [TranslocoDirective, ProjectComponent],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})
export class ProjectsListComponent {

}
