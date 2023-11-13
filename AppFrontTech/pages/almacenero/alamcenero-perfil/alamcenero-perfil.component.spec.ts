import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlamceneroPerfilComponent } from './alamcenero-perfil.component';

describe('AlamceneroPerfilComponent', () => {
  let component: AlamceneroPerfilComponent;
  let fixture: ComponentFixture<AlamceneroPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlamceneroPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlamceneroPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
