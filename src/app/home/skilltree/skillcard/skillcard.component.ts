import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skillcard',
  imports: [],
  templateUrl: './skillcard.component.html',
  styleUrl: './skillcard.component.scss'
})
export class SkillcardComponent implements OnInit {
  @Input() skill!: {
    name: string;
    icon: string;
    colored: string;
  }
  @Input() index!: number;
  // isHovered = false;
  @ViewChild('skillCard') skillCardElem!: ElementRef;
  glowColor:string = 'cyan';

  ngOnInit(): void {
    this.glowColor = this.skill.colored;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // console.log(`Maus bewegt: ${event.clientX}, ${event.clientY}`);
    // const target = this.elemRef.nativeElement.querySelector('#skillcard-' + this.index);
    const target = this.skillCardElem.nativeElement;
    const rect = target.getBoundingClientRect();
    const currentX = event.clientX - rect.left;
    const currentY = event.clientY - rect.top;

    target.style.setProperty('--x', currentX + 'px');
    target.style.setProperty('--y', currentY + 'px');
  }
}
