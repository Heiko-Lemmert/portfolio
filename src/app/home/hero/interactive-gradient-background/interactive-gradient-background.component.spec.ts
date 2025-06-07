import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveGradientBackgroundComponent } from './interactive-gradient-background.component';

describe('InteractiveGradientBackgroundComponent', () => {
  let component: InteractiveGradientBackgroundComponent;
  let fixture: ComponentFixture<InteractiveGradientBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveGradientBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveGradientBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
