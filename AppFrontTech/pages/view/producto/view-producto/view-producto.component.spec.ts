import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductoComponent } from './view-producto.component';

describe('ViewProductoComponent', () => {
  let component: ViewProductoComponent;
  let fixture: ComponentFixture<ViewProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
