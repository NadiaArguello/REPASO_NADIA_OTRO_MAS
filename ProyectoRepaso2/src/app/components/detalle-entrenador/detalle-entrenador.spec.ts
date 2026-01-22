import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEntrenador } from './detalle-entrenador';

describe('DetalleEntrenador', () => {
  let component: DetalleEntrenador;
  let fixture: ComponentFixture<DetalleEntrenador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleEntrenador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleEntrenador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
