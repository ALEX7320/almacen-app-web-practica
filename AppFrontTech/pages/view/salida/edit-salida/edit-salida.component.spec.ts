import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSalidaComponent } from './edit-salida.component';

describe('EditSalidaComponent', () => {
  let component: EditSalidaComponent;
  let fixture: ComponentFixture<EditSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSalidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
