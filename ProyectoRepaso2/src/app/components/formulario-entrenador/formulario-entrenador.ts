import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Entrenador } from '../../models/entrenador.model';
import { EntrenadoresService } from '../../services/entrenadoresService';

@Component({
  selector: 'app-formulario-entrenador',
  standalone: false,
  templateUrl: './formulario-entrenador.html',
  styleUrl: './formulario-entrenador.css',
  providers:[EntrenadoresService]
})
export class FormularioEntrenador {

  public entrenadorNuevo : Entrenador = {
    id: '',
    nombre: '',
    apellidos: '',
    edad: 0,
    avatar:''
  }

  constructor(
    private _entrenadoresServices: EntrenadoresService,
    private router: Router
  ){}

  guardar():void{
    const datosEntrenador= {
      nombre: this.entrenadorNuevo.nombre,
      apellidos:this.entrenadorNuevo.apellidos,
      edad:this.entrenadorNuevo.edad,
      avatar: this.entrenadorNuevo.avatar
    }

    this._entrenadoresServices.postEntrenadores(datosEntrenador).subscribe({
      next:()=>{
        this.router.navigate(['/']);
      },
      error:(error)=>{
        console.error('error al crear entrenador',error)
      }
    })
    }
  }


