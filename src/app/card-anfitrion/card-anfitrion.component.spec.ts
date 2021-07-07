import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnfitrionComponent } from './card-anfitrion.component';

describe('CardAnfitrionComponent', () => {
  let component: CardAnfitrionComponent;
  let fixture: ComponentFixture<CardAnfitrionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAnfitrionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAnfitrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
