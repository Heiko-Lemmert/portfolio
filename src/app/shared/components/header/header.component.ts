import { AfterViewInit, Component, ViewChild, ElementRef, inject, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../../../services/local-storage.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { GlobalDataService } from '../../../services/global-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterModule, TranslocoDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
/**
 * Header component controls site navigation state, theme toggle and active
 * section tracking via an IntersectionObserver.
 */
export class HeaderComponent implements OnInit, OnDestroy {
  private observer: IntersectionObserver | null = null;
  private subscription!: Subscription;
  private localStorage = inject(LocalStorageService);
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  private transloco = inject(TranslocoService);
  private globalData = inject(GlobalDataService);
  activeSection = 'home';
  /** Whether the light theme is currently activated. */
  lightThemeActivated: boolean = false;
  /** Whether the top section is shown with light theme. */
  isTopOnLight: boolean = false;
  /** Internal flag used for subscription management. */
  manuallySubscribedValue = false;

  _themeToggleRef!: ElementRef;
  @ViewChild('toggle')
  set themeToggle(elementRef: ElementRef) {
    if (elementRef) {
      this._themeToggleRef = elementRef;

      if (this.lightThemeActivated) {
        this._themeToggleRef.nativeElement.checked = this.lightThemeActivated;
      }
    }
  }
  get themeToggleRef(): ElementRef {
    return this._themeToggleRef;
  }

  ngOnInit(): void {
    this.setupInterSectionObserver()
    this.setActiveFragment();
    this.setLightModeObserver();
    window.addEventListener('resize', () => this.reinitObserver());
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    window.removeEventListener('resize', () => this.reinitObserver());
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
    const setTheme: boolean = this.themeToggleRef.nativeElement.checked;
    this.globalData.setGlobalVariable(setTheme);
    this.localStorage.setItem('isLightMode', setTheme);
    this.isTopOnLight = this.activeSection === 'home' && this.lightThemeActivated;
  }

  /**
   * Returns true when the current path is the application root and theme/top
   * state match the expected values.
   */
  isOnRoot() {
    const path = this.location.path();
    return (path === '' && !this.isTopOnLight && this.lightThemeActivated)
  }

  /**
   * Subscribe to global light mode changes and keep internal state in sync.
   */
  setLightModeObserver() {
    this.subscription = this.globalData.lightModeActivated$.subscribe(value => {
      this.lightThemeActivated = value;
    });
  }

  /**
   * Create an IntersectionObserver that tracks which page section is visible
   * and updates `activeSection`. Uses a viewport offset of half the window
   * height to determine the active section.
   */
  setupInterSectionObserver() {
    const options = this.createIntersectionOptions();
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersectionEntries(entries),
      options
    );
    this.attachObserverToSections();
  }

  /**
   * Create configuration options for the IntersectionObserver with a margin
   * offset equal to half the viewport height.
   * @returns intersection observer options object
   */
  private createIntersectionOptions() {
    const viewportHeight = window.innerHeight;
    const halfViewport = viewportHeight / 2;
    return {
      root: null,
      rootMargin: `0px -${halfViewport}px 0px -${halfViewport}px`,
      threshold: 0.3
    };
  }

  /**
   * Handle intersection observer entries and update the active section when
   * an entry becomes visible. Updates URL fragment and light mode state.
   * @param entries - array of IntersectionObserverEntry objects
   */
  private handleIntersectionEntries(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionID = entry.target.id;
        if (sectionID && sectionID !== 'toast-default') {
          this.activeSection = sectionID || 'home';
          this.isTopOnLight = this.activeSection === 'home' && this.lightThemeActivated;
          const fragment = sectionID ? `#${sectionID}` : '';
          this.location.replaceState(`/${fragment}`);
        }
      }
    });
  }

  /**
   * Find all observable sections and attach the IntersectionObserver to them.
   * Wrapped in a timeout to ensure DOM is fully ready.
   */
  private attachObserverToSections() {
    setTimeout(() => {
      const sections = document.querySelectorAll('section[id], div[id]:not(#toast-default)');
      sections.forEach(section => {
        if (this.observer) {
          this.observer.observe(section);
        }
      });
    }, 100);
  }

  /**
   * Re-initialize the IntersectionObserver, used on resize to ensure
   * correct viewport thresholds.
   */
  private reinitObserver() {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.setupInterSectionObserver();
  }

  /**
   * Watch route fragment changes and scroll to the corresponding section when
   * a fragment is present.
   */
  setActiveFragment() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.activeSection = fragment;
        setTimeout(() => this.scrollTo(fragment), 100);
      }
    });
  }

  /**
   * Handle navigation click by closing any open dropdowns and scrolling
   * to the specified section.
   * @param sectionId - id of the section to navigate to
   */
  handleNavClick(sectionId: string) {
    this.closeDropdown();
    this.scrollTo(sectionId);
  }

  /**
   * Close any open dropdown menus by blurring the currently focused element.
   */
  closeDropdown() {
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement) {
      activeElement.blur();
    }
  }


  /**
   * Smooth-scroll to an element by id, or scroll to top when `home` is passed.
   * @param sectionId - id of the section to scroll to
   */
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


  /**
   * Change the active translation language and persist the choice.
   * @param lang - language code to activate (e.g. 'en' or 'de')
   */
  changeLanguage(lang: string) {
    this.transloco.setActiveLang(lang);
    this.localStorage.setItem('language', lang)
  }
}
