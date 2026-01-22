import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class EntrenadoresService{
    public entrenadoresURL: string;

    constructor(private _http:HttpClient){
        this.entrenadoresURL='https://694ad9fb26e870772066bff3.mockapi.io/api/entrenadores';
    }

    getListaEntrenadores():Observable<any>{
        return this._http.get(this.entrenadoresURL);
    }

    getEntrenadoresById(id:string):Observable<any>{
        return this._http.get(`${this.entrenadoresURL}/${id}`);
    }

    postEntrenadores(datosEntrenadores: any):Observable<any>{
        return this._http.post(this.entrenadoresURL, datosEntrenadores);
    }

    putEntrenadores(id: string, datosEntrenadores:any):Observable<any>{
        return this._http.put(datosEntrenadores, `${this.entrenadoresURL}/${id}`);
    }

   DeleteEntrenadores(id:string):Observable<any>{
        return this._http.delete(`${this.entrenadoresURL}/${id}`);
    }

    
}
