import { Component, inject } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { ProjectComponent } from './project/project.component';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects-list',
  imports: [TranslocoDirective, ProjectComponent],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})
export class ProjectsListComponent {
  /** Injected projects service providing project metadata used in the list. */
  projectdata = inject(ProjectsService);

}
