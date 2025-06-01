import { AfterViewInit, Component, ViewChild, ElementRef, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../../../services/local-storage.service';


@Component({
  selector: 'app-header',
  imports: [FormsModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('themeToggle') themeToggleRef!: ElementRef<HTMLInputElement>;
  localStorage = inject(LocalStorageService);

  ngAfterViewInit() {
    // Zugriff möglich ab hier, da das View-Element dann gerendert ist
    const isChecked:boolean | null = this.localStorage.getItem('Theme');
    if (isChecked) {
      this.themeToggleRef.nativeElement.checked = isChecked;
    }
  }

  setTheme() {
    const isChecked = this.themeToggleRef.nativeElement.checked;
    this.localStorage.setItem('Theme', isChecked)
  }
}
