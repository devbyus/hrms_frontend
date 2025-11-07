import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRoasterComponent } from './leave-roaster.component';

describe('LeaveRoasterComponent', () => {
  let component: LeaveRoasterComponent;
  let fixture: ComponentFixture<LeaveRoasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveRoasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveRoasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
