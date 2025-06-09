import { Component, inject } from '@angular/core';
import { InteractiveGradientBackgroundComponent } from "./interactive-gradient-background/interactive-gradient-background.component";
import { RouterLink } from '@angular/router';
import { SociallinksService } from '../../services/sociallinks.service';
import { NgxTypedWriterModule } from 'ngx-typed-writer';

@Component({
  selector: 'app-hero',
  imports: [InteractiveGradientBackgroundComponent, RouterLink, NgxTypedWriterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  social = inject(SociallinksService);
  github = this.social.socialLinks.github;
  linkedin = this.social.socialLinks.linkedin;
  mailURL = 'mailto:' + this.social.socialLinks.mail;

}
