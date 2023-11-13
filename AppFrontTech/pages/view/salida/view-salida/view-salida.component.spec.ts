import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSalidaComponent } from './view-salida.component';

describe('ViewSalidaComponent', () => {
  let component: ViewSalidaComponent;
  let fixture: ComponentFixture<ViewSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSalidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
