import { Component, inject } from '@angular/core';
import { InteractiveGradientBackgroundComponent } from "./interactive-gradient-background/interactive-gradient-background.component";
import { RouterLink } from '@angular/router';
import { SociallinksService } from '../../services/sociallinks.service';
import { NgxTypedWriterModule } from 'ngx-typed-writer';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-hero',
  imports: [InteractiveGradientBackgroundComponent, RouterLink, NgxTypedWriterModule, TranslocoDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  /**
   * Array of strings used by the typed writer to cycle through titles.
   */
  nameString: string[] = ['Heiko Lemmert', 'Frontend Developer', 'Tech Enthusiast'];
}
