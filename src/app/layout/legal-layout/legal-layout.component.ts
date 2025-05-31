import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-legal-layout',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './legal-layout.component.html',
  styleUrl: './legal-layout.component.scss'
})
export class LegalLayoutComponent {

}
