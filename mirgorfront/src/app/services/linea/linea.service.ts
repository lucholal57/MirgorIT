import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Linea } from 'src/app/entidades/linea/linea';

// Constante de los headers para los encabezados
const httpOption = {
  headers: new HttpHeaders({ 'content-type' : 'application/json',
                              }),
}

@Injectable({
  providedIn: 'root'
})
export class LineaService {
  private url = 'http://127.0.0.1:8000/'

  constructor( private http : HttpClient) { }

  getLineas(): Observable<Linea[]>{
    return this.http.get<Linea[]>(this.url + 'linea' , httpOption)
  }
  registrarLinea(formularioregistro:any):Observable<Linea[]>{
    return this.http.post<Linea[]>(this.url + 'linea', formularioregistro, httpOption)
  }
  getLineaId(busqueda_linea: Linea): Observable<Linea[]>{
    return this.http.get<Linea[]>(this.url + 'linea/' + busqueda_linea.id,httpOption );
  }
  
  editarLinea(formularioregistro: any, id: number): Observable<Linea[]>{
    return this.http.put<Linea[]>(this.url + 'linea/' + id, formularioregistro, httpOption);

  }
  eliminarLinea(id: number): Observable<Linea[]>{
    return this.http.delete<Linea[]>(this.url + 'linea/' + id, httpOption );
  }
  busquedaLinea(nombre:any): Observable<Linea[]>{
    return  this.http.get<Linea[]>(this.url + 'linea/buscar/' + nombre, httpOption );
  }
}
