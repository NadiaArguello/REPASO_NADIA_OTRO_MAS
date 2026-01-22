import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEntrenador } from './formulario-entrenador';

describe('FormularioEntrenador', () => {
  let component: FormularioEntrenador;
  let fixture: ComponentFixture<FormularioEntrenador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioEntrenador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEntrenador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
