import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngresoComponent } from './add-ingreso.component';

describe('AddIngresoComponent', () => {
  let component: AddIngresoComponent;
  let fixture: ComponentFixture<AddIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIngresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
