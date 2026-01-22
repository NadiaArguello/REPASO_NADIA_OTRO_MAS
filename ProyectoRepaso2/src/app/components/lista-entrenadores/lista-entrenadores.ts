import { Component } from '@angular/core';
import { OnInit,ChangeDetectorRef } from '@angular/core';

import { Entrenador } from '../../models/entrenador.model';
import { EntrenadoresService } from '../../services/entrenadoresService';


@Component({
  selector: 'app-lista-entrenadores',
  standalone: false,
  templateUrl: './lista-entrenadores.html',
  styleUrl: './lista-entrenadores.css',
  providers: [EntrenadoresService]
})
export class ListaEntrenadores implements OnInit{

  public listaEntrenadores: Entrenador[]=[];
  public listaFiltrada: Entrenador[]=[];

  public filtroNombre : string = '';

  constructor(private _entrenadoresService: EntrenadoresService, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
      this.cargarDatos();
  }

  cargarDatos():void{
    this._entrenadoresService.getListaEntrenadores().subscribe({
      next:(response)=> {
        this.listaEntrenadores= response;
        this.listaFiltrada = [...this.listaEntrenadores];
        this.cdr.detectChanges();
      },
      error:(error)=>{
        console.log('Error al cargar lista de entrenadores', error);
      }
    });
  }

  aplicarFiltros():void{
    const nombre = this.filtroNombre.trim().toLowerCase();

    this.listaFiltrada= this.listaEntrenadores.filter(entrenadores => {
      const cumpleNombre = !nombre || entrenadores.nombre.toLowerCase().includes(nombre);
      return cumpleNombre;
    })
    this.cdr.detectChanges();
  }

  limpiarFiltros():void{
    this.filtroNombre = '';
    this.listaFiltrada = [...this.listaEntrenadores];
    this.cdr.detectChanges();
  }

borrarEntrenador(id:string):void{
const ok=confirm('¿Seguro que quieres borrar el entrenador?');

if(!ok) return;

  this._entrenadoresService.DeleteEntrenadores(id).subscribe({
    next:()=>{
      this.listaEntrenadores=this.listaEntrenadores.filter(entrenador=> entrenador.id !==id);
            this.cdr.detectChanges();
      this.aplicarFiltros();
    },
    error:(error)=>{
      console.error('error al borrar entrenador',error);
    }
  })
}
  


}
