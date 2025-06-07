import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkilltreeComponent } from './skilltree/skilltree.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeroComponent } from "./hero/hero.component";

@Component({
  selector: 'app-home',
  imports: [ AboutMeComponent, SkilltreeComponent, ProjectsListComponent, ReviewsComponent, ContactsComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

}
