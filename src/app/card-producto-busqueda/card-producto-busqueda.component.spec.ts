import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductoBusquedaComponent } from './card-producto-busqueda.component';

describe('CardProductoBusquedaComponent', () => {
  let component: CardProductoBusquedaComponent;
  let fixture: ComponentFixture<CardProductoBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProductoBusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProductoBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
