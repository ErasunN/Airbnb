import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLugaresInteresComponent } from './card-lugares-interes.component';

describe('CardLugaresInteresComponent', () => {
  let component: CardLugaresInteresComponent;
  let fixture: ComponentFixture<CardLugaresInteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLugaresInteresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLugaresInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
