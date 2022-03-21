import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ActivoGeneral} from '../../../entidades/activos/activo_general/activo-general';

// Constante de los headers para los encabezados
const httpOption = {
  headers: new HttpHeaders({ 'content-type' : 'application/json',
                              }),
}


@Injectable({
  providedIn: 'root'
})
export class ActivoGeneralService {
  private url = 'http://127.0.0.1:8000/'

  constructor( private http : HttpClient) { }

  getActivoGeneral(): Observable<ActivoGeneral[]>{
    return this.http.get<ActivoGeneral[]>(this.url + 'activo_general' , httpOption)
  }
  registrarActivoGeneral(formularioregistro:any):Observable<ActivoGeneral[]>{
    return this.http.post<ActivoGeneral[]>(this.url + 'activo_general', formularioregistro, httpOption)
  }
  getActivoGeneralId(busqueda_activo: ActivoGeneral): Observable<ActivoGeneral[]>{
    return this.http.get<ActivoGeneral[]>(this.url + 'activo_general/' + busqueda_activo.id,httpOption );
  }

  editarActivoGeneral(formularioregistro: any, id: number): Observable<ActivoGeneral[]>{
    return this.http.put<ActivoGeneral[]>(this.url + 'activo_general/' + id, formularioregistro, httpOption);

  }
  eliminarActivoGeneral(id: number): Observable<ActivoGeneral[]>{
    return this.http.delete<ActivoGeneral[]>(this.url + 'activo_general/' + id, httpOption );
  }
  busquedaActivo(buscar_activo:string): Observable<ActivoGeneral[]>{
    return  this.http.get<ActivoGeneral[]>(this.url + 'activo_general/buscar/' + buscar_activo, httpOption );
  }
}
