import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooditemssummaryComponent } from './fooditemssummary.component';

describe('FooditemssummaryComponent', () => {
  let component: FooditemssummaryComponent;
  let fixture: ComponentFixture<FooditemssummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooditemssummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooditemssummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
