import { Component, OnInit,ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Entrenador } from '../../models/entrenador.model';
import { EntrenadoresService } from '../../services/entrenadoresService';

@Component({
  selector: 'app-detalle-entrenador',
  standalone: false,
  templateUrl: './detalle-entrenador.html',
  styleUrl: './detalle-entrenador.css',
  providers: [EntrenadoresService]
})
export class DetalleEntrenador implements OnInit {

  public datosEntrenador! : Entrenador;

  constructor(private _entrenadoresServices:EntrenadoresService, private cdr:ChangeDetectorRef, private route: ActivatedRoute ){}

ngOnInit(): void {
  const id = String(this.route.snapshot.paramMap.get('id'));
  this.cargarDetalle(id);
}

cargarDetalle(id:string):void{
  this._entrenadoresServices.getEntrenadoresById(id).subscribe({
    next:(response)=>{
      this.datosEntrenador= response;
      this.cdr.detectChanges();
    },
    error:(error)=> {
      console.error('error al cargar el detalle de entrenadores', error)
    }
  });
}

}
