import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  private transloco = inject(TranslocoService);
  private localStorage = inject(LocalStorageService);

  ngOnInit(): void {
    this.setupLanguage();
  }

  setupLanguage() {
    const defaultLanguage = this.transloco.getDefaultLang();
    const storageLanguage = this.localStorage.getItem<string>('language');
      if (storageLanguage == null) {
        this.localStorage.setItem('language', defaultLanguage);
      } else {
        this.transloco.setActiveLang(storageLanguage);
      }
  }
}
