import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Route } from "@angular/router";

/*COMPONENTES */

import { ListaEntrenadores } from "./components/lista-entrenadores/lista-entrenadores";
import { DetalleEntrenador } from "./components/detalle-entrenador/detalle-entrenador";
import { FormularioEntrenador } from "./components/formulario-entrenador/formulario-entrenador";
/*guardar rutas */


const misRutas: Routes=[
    {path:'', component:ListaEntrenadores},
    {path:'entrenador/nuevo', component:FormularioEntrenador},
    {path:'entrenador/:id', component:DetalleEntrenador},
    {path:'**', component: ListaEntrenadores}
]

/*Exportar rutas */

export const appRoutingPrividers: any[]= [];
export const routing: ModuleWithProviders<Route>=RouterModule.forRoot(misRutas);