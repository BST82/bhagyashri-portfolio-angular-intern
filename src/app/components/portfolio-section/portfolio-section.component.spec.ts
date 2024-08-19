import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSectionComponent } from './portfolio-section.component';

describe('PortfolioSectionComponent', () => {
  let component: PortfolioSectionComponent;
  let fixture: ComponentFixture<PortfolioSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
