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
  private globalData = inject(GlobalDataService)
  lightModeActivated: Boolean = false;
  lightModeSub!: Subscription;
  @Input() skill!: {
    name: string;
    icon: string;
    iconLight: string;
    colored: string;
  }
  @Input() index!: number;
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
