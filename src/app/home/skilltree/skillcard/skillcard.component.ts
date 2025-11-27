import { Component, ElementRef, HostListener, inject, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { GlobalDataService } from '../../../services/global-data.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skillcard',
  imports: [TranslocoPipe, CommonModule],
  templateUrl: './skillcard.component.html',
  styleUrl: './skillcard.component.scss'
})
export class SkillcardComponent implements OnInit, OnDestroy {
  /** Injected global data service for shared observables and settings. */
  private globalData = inject(GlobalDataService)
  /** Whether light mode is currently active. */
  lightModeActivated: Boolean = false;
  /** Subscription for the light mode observable. */
  lightModeSub!: Subscription;
  /** Skill data provided by the parent component. */
  @Input() skill!: {
    name: string;
    icon: string;
    iconLight: string;
    colored: string;
  }
  /** Index of the skill in the skill list. */
  @Input() index!: number;
  /** Reference to the DOM element of the skill card, used for mouse effects. */
  @ViewChild('skillCard') skillCardElem!: ElementRef;
  glowColor: string = 'cyan';

  ngOnInit(): void {
    this.glowColor = this.skill.colored;
    this.lightModeSub = this.globalData.lightModeActivated$.subscribe(value => {
      this.lightModeActivated = value;
    })
  }

  ngOnDestroy(): void {
    if (this.lightModeSub) {
      this.lightModeSub.unsubscribe();
    }
  }

  /**
   * Track mouse movement over the skill card and update CSS variables for
   * hover effects. Calculates the relative position of the mouse within the card.
   * @param event - the mousemove event
   */
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const target = this.skillCardElem.nativeElement;
    const rect = target.getBoundingClientRect();
    const currentX = event.clientX - rect.left;
    const currentY = event.clientY - rect.top;

    target.style.setProperty('--x', currentX + 'px');
    target.style.setProperty('--y', currentY + 'px');
  }
}
