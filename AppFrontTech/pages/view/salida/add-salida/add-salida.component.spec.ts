import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalidaComponent } from './add-salida.component';

describe('AddSalidaComponent', () => {
  let component: AddSalidaComponent;
  let fixture: ComponentFixture<AddSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSalidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
