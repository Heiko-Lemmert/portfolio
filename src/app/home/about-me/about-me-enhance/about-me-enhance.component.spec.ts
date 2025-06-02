import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeEnhanceComponent } from './about-me-enhance.component';

describe('AboutMeEnhanceComponent', () => {
  let component: AboutMeEnhanceComponent;
  let fixture: ComponentFixture<AboutMeEnhanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeEnhanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeEnhanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
