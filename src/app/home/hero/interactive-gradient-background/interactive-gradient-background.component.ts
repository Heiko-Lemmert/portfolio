import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-interactive-gradient-background',
  imports: [],
  templateUrl: './interactive-gradient-background.component.html',
  styleUrl: './interactive-gradient-background.component.scss'
})
export class InteractiveGradientBackgroundComponent implements OnInit, OnDestroy {
  private animationId: number = 0;
  private curX = 0;
  private curY = 0;
  private tgX = 0;
  private tgY = 0;
  private mouseMoveListener?: () => void;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.initializeInteractiveElement();
    this.startAnimation();
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.mouseMoveListener) {
      this.mouseMoveListener();
    }
  }

  private initializeInteractiveElement() {
    const interactiveElement = this.elementRef.nativeElement.querySelector('.interactive');
    
    if (interactiveElement) {
      this.mouseMoveListener = this.renderer.listen('window', 'mousemove', (event: MouseEvent) => {
        this.tgX = event.clientX;
        this.tgY = event.clientY;
      });
    }
  }

  private startAnimation() {
    const interactiveElement = this.elementRef.nativeElement.querySelector('.interactive');
    
    const animate = () => {
      this.curX += (this.tgX - this.curX) / 20;
      this.curY += (this.tgY - this.curY) / 20;
      
      if (interactiveElement) {
        this.renderer.setStyle(
          interactiveElement,
          'transform',
          `translate(${Math.round(this.curX)}px, ${Math.round(this.curY)}px)`
        );
      }
      
      this.animationId = requestAnimationFrame(animate);
    };
    
    animate();
  }
}
