import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsuarioPasswordComponent } from './edit-usuario-password.component';

describe('EditUsuarioPasswordComponent', () => {
  let component: EditUsuarioPasswordComponent;
  let fixture: ComponentFixture<EditUsuarioPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUsuarioPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUsuarioPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
