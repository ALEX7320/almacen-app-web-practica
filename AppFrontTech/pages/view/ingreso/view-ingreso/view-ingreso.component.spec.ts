import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIngresoComponent } from './view-ingreso.component';

describe('ViewIngresoComponent', () => {
  let component: ViewIngresoComponent;
  let fixture: ComponentFixture<ViewIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIngresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
