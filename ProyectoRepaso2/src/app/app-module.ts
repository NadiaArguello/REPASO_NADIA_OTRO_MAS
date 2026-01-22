import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingPrividers } from './app-routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaEntrenadores } from './components/lista-entrenadores/lista-entrenadores';
import { DetalleEntrenador } from './components/detalle-entrenador/detalle-entrenador';
import { FormularioEntrenador } from './components/formulario-entrenador/formulario-entrenador';

@NgModule({
  declarations: [
    App,
    ListaEntrenadores,
    DetalleEntrenador,
    FormularioEntrenador
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingPrividers,
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
