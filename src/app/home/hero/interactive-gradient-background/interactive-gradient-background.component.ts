import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-interactive-gradient-background',
  imports: [],
  templateUrl: './interactive-gradient-background.component.html',
  styleUrl: './interactive-gradient-background.component.scss'
})
export class InteractiveGradientBackgroundComponent implements OnInit, OnDestroy {
  /** ID returned from requestAnimationFrame so the animation can be canceled. */
  private animationId: number = 0;
  private curX = 0;
  private curY = 0;
  private tgX = 0;
  private tgY = 0;
  /** Unregister function returned by Renderer2.listen for mousemove. */
  private mouseMoveListener?: () => void;

  /**
   * @param elementRef - reference to the component host element
   * @param renderer - Renderer2 used to attach window event listeners and set styles
   */
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  /** Initialize interactive element and attach mousemove listener. */
  ngOnInit() {
    this.initializeInteractiveElement();
    this.startAnimation();
  }

  /** Clean up animation frame and event listeners. */
  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.mouseMoveListener) {
      this.mouseMoveListener();
    }
  }

  /**
   * Attach a mousemove listener that updates target coordinates used by the
   * smooth animation loop.
   */
  private initializeInteractiveElement() {
    const interactiveElement = this.elementRef.nativeElement.querySelector('.interactive');

    if (interactiveElement) {
      this.mouseMoveListener = this.renderer.listen('window', 'mousemove', (event: MouseEvent) => {
        this.tgX = event.clientX;
        this.tgY = event.clientY;
      });
    }
  }

  /**
   * Starts a smooth requestAnimationFrame loop that moves the interactive
   * element towards the latest mouse coordinates.
   */
  private startAnimation() {
    const interactiveElement = this.elementRef.nativeElement.querySelector('.interactive');
    const animate = () => {
      this.curX += (this.tgX - this.curX) / 20;
      this.curY += (this.tgY - this.curY) / 20;

      if (interactiveElement) {
        this.renderBackground(interactiveElement);
      }
      this.animationId = requestAnimationFrame(animate);
    };
    animate();
  }

  /**
   * Apply a CSS transform to the interactive element to move it to the current
   * smooth-animated coordinates.
   * @param interactiveElement - the DOM element to transform
   */
  private renderBackground(interactiveElement: ElementRef) {
    this.renderer.setStyle(
      interactiveElement,
      'transform',
      `translate(${Math.round(this.curX)}px, ${Math.round(this.curY)}px)`
    );
  }
}
