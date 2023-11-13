import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorCardComponent } from './proveedor-card.component';

describe('ProveedorCardComponent', () => {
  let component: ProveedorCardComponent;
  let fixture: ComponentFixture<ProveedorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
