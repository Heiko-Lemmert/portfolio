import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  imports: [FormsModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('themeToggle') themeToggleRef!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    // Zugriff möglich ab hier, da das View-Element dann gerendert ist
    console.log('Initialer Wert:', this.themeToggleRef.nativeElement.checked);
  }

  logCheckboxValue() {
    const isChecked = this.themeToggleRef.nativeElement.checked;
    console.log('Aktueller Wert der Checkbox:', isChecked);
  }
}
