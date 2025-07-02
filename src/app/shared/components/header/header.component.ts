import { AfterViewInit, Component, ViewChild, ElementRef, inject, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../../../services/local-storage.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterModule, TranslocoDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit, OnInit, OnDestroy {
  // @ViewChild('toggle') themeToggleRef!: ElementRef;
  _themeToggleRef!: ElementRef;
  @ViewChild('toggle')
  set themeToggle(elementRef: ElementRef) {
    if (elementRef) {
      this._themeToggleRef = elementRef;

      const isActivated: boolean | null = this.localStorage.getItem('isLightMode');
      if (isActivated) {
        this._themeToggleRef.nativeElement.checked = isActivated;
        this.lightThemeActivated = isActivated;
      } else {
        this.lightThemeActivated = isActivated;
      }
    }
  }
  get themeToggleRef(): ElementRef {
    return this._themeToggleRef;
  }


  activeSection = 'Home';
  lightThemeActivated: boolean | null = false;
  isTopOnLight: boolean = false;
  private observer: IntersectionObserver | null = null;

  private localStorage = inject(LocalStorageService);
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  private transloco = inject(TranslocoService);

  ngOnInit(): void {
    this.setupInterSectionObserver()
    this.setActiveFragment();
  }



  ngAfterViewInit() {
    console.log('themeToggleRef:', this.themeToggleRef);

    setTimeout(() => {
      console.log('Ohne Ref');

      if (this.themeToggleRef) {
        console.log('themeToggleRef after timeout:', this.themeToggleRef);
        // weitere Logik
      }
    }), 500;

    // const getTheme: boolean | null = this.localStorage.getItem('isLightMode');
    // this.lightThemeActivated = getTheme;
    // const isActivated = this.lightThemeActivated;

    // if (isActivated) {
    //   this.themeToggleRef.nativeElement.checked = isActivated;
    // }

    // const isActivated:boolean | null = this.localStorage.getItem('isLightMode');
    // if (isActivated) {
    //   this.themeToggleRef.nativeElement.checked = isActivated;
    //   this.lightThemeActivated = isActivated
    // } else {
    //   this.lightThemeActivated = isActivated;
    // }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  /**
   * Sets the current theme preference in local storage based on the state of the theme toggle.
   * 
   * Retrieves the checked state from the theme toggle element and stores it in local storage
   * under the key 'isLightMode'. This allows the user's theme preference to persist across sessions.
   *
   * @remarks
   * Assumes that `themeToggleRef` is a reference to a toggle input element and that
   * `localStorage` is an object providing a `setItem` method compatible with the Web Storage API.
   */
  setTheme() {
    const setTheme = this.themeToggleRef.nativeElement.checked;
    console.log(this.themeToggleRef.nativeElement);

    this.lightThemeActivated = setTheme ? true : false;
    this.isTopOnLight = this.isOnRoot() ? true : false;
    this.localStorage.setItem('isLightMode', setTheme);
  }

  isOnRoot() {
    const path = this.location.path();
    return (path === '' && !this.isTopOnLight && this.lightThemeActivated)
  }

  setupInterSectionObserver() {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Aktiviert wenn Section in der Mitte ist
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionID = entry.target.id;
          this.activeSection = sectionID || 'home';
          this.isTopOnLight = sectionID === 'home' && this.lightThemeActivated ? true : false;

          // URL mit Location Service aktualisieren (ohne Navigation)
          const fragment = sectionID ? `#${sectionID}` : '';
          this.location.replaceState(`/${fragment}`);
        }
      });
    }, options);

    // Alle Sections observieren
    setTimeout(() => {
      const sections = document.querySelectorAll('section[id], div[id]');
      sections.forEach(section => {
        if (this.observer) {
          this.observer.observe(section);
        }
      });
    }, 100);
  };

  setActiveFragment() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.activeSection = fragment;
        setTimeout(() => this.scrollTo(fragment), 100);
      }
    });
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  changeLanguage(lang: string) {
    this.transloco.setActiveLang(lang);
    this.localStorage.setItem('language', lang)
  }
}
