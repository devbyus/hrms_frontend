import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPunchComponent } from './daily-punch.component';

describe('DailyPunchComponent', () => {
  let component: DailyPunchComponent;
  let fixture: ComponentFixture<DailyPunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyPunchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyPunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
