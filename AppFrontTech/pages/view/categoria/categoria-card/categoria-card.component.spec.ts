import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaCardComponent } from './categoria-card.component';

describe('CategoriaCardComponent', () => {
  let component: CategoriaCardComponent;
  let fixture: ComponentFixture<CategoriaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
