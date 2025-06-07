import { Component } from '@angular/core';
import { InteractiveGradientBackgroundComponent } from "./interactive-gradient-background/interactive-gradient-background.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [InteractiveGradientBackgroundComponent, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
