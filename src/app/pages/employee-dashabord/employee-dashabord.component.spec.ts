import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDashabordComponent } from './employee-dashabord.component';

describe('EmployeeDashabordComponent', () => {
  let component: EmployeeDashabordComponent;
  let fixture: ComponentFixture<EmployeeDashabordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeDashabordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDashabordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
