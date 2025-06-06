import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkilltreeComponent } from './skilltree/skilltree.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactsComponent } from './contacts/contacts.component';

@Component({
  selector: 'app-home',
  imports: [AboveTheFoldComponent, AboutMeComponent, SkilltreeComponent, ProjectsListComponent, ReviewsComponent, ContactsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

}
