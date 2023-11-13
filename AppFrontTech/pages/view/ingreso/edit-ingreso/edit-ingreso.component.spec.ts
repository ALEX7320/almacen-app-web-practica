import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIngresoComponent } from './edit-ingreso.component';

describe('EditIngresoComponent', () => {
  let component: EditIngresoComponent;
  let fixture: ComponentFixture<EditIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditIngresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
