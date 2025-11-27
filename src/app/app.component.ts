import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
import { LocalStorageService } from './services/local-storage.service';
import { GlobalDataService } from './services/global-data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  /**
   * Application title used in index.html and for diagnostics.
   */
  title = 'portfolio';

  /**
   * Transloco service instance for language handling (DI via inject).
   */
  private transloco = inject(TranslocoService);

  /**
   * Local storage service used to persist simple client settings.
   */
  private localStorage = inject(LocalStorageService);

  /**
   * Global data service to share application-wide state (theme, domain, etc.).
   */
  private globalData = inject(GlobalDataService);

  ngOnInit(): void {
    this.setupLanguage();
    this.setupTheme();
  }
  /**
   * Initialize theme based on stored preference. If no preference is stored,
   * set a default value. If a preference exists, apply it to the global state.
   */
  setupTheme() {
    const isLightModeOn = this.localStorage.getItem<boolean>('isLightMode');
    if (isLightModeOn == null) {
      this.localStorage.setItem('isLightMode', false);
    } else if (isLightModeOn) {
      this.globalData.setGlobalVariable(isLightModeOn);
    }
  }

  /**
   * Configure application language. Read from local storage and fall back to
   * the default language provided by Transloco. Sets the active language.
   */
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
