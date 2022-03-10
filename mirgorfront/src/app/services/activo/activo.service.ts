import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activo } from 'src/app/entidades/activo/activo';

// Constante de los headers para los encabezados
const httpOption = {
  headers: new HttpHeaders({ 'content-type' : 'application/json',
                              }),
}

@Injectable({
  providedIn: 'root'
})
export class ActivoService {
  private url = 'http://127.0.0.1:8000/'

  constructor( private http : HttpClient) { }

  getActivos(): Observable<Activo[]>{
    return this.http.get<Activo[]>(this.url + 'activo' , httpOption)
  }
  registrarActivo(formularioregistro:any):Observable<Activo[]>{
    return this.http.post<Activo[]>(this.url + 'activo', formularioregistro, httpOption)
  }
  getActivoId(busqueda_activo: Activo): Observable<Activo[]>{
    return this.http.get<Activo[]>(this.url + 'activo/' + busqueda_activo.id,httpOption );
  }
}
