import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEntrenadores } from './lista-entrenadores';

describe('ListaEntrenadores', () => {
  let component: ListaEntrenadores;
  let fixture: ComponentFixture<ListaEntrenadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaEntrenadores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEntrenadores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
