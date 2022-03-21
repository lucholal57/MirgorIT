import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivoNotebook} from 'src/app/entidades/activos/activo_notebook/activo-notebook';

// Constante de los headers para los encabezados
const httpOption = {
  headers: new HttpHeaders({ 'content-type' : 'application/json',
                              }),
}

@Injectable({
  providedIn: 'root'
})
export class ActivoNotebookService {
  private url = 'http://127.0.0.1:8000/'

  constructor(private http: HttpClient) { }

  getActivoNotebook(): Observable<ActivoNotebook[]>{
    return this.http.get<ActivoNotebook[]>(this.url + 'notebook' , httpOption)
  }
  registrarActivoNotebook(formularioregistro:any):Observable<ActivoNotebook[]>{
    return this.http.post<ActivoNotebook[]>(this.url + 'notebook', formularioregistro, httpOption)
  }
  getActivoNotebookId(busqueda_activo: ActivoNotebook): Observable<ActivoNotebook[]>{
    return this.http.get<ActivoNotebook[]>(this.url + 'notebook/' + busqueda_activo.id,httpOption );
  }

  editarActivoNotebook(formularioregistro: any, id: number): Observable<ActivoNotebook[]>{
    return this.http.put<ActivoNotebook[]>(this.url + 'notebook/' + id, formularioregistro, httpOption);

  }
  eliminarActivoNotebook(id: number): Observable<ActivoNotebook[]>{
    return this.http.delete<ActivoNotebook[]>(this.url + 'notebook/' + id, httpOption );
  }
  busquedaActivo(buscar_activo:string): Observable<ActivoNotebook[]>{
    return  this.http.get<ActivoNotebook[]>(this.url + 'notebook/buscar/' + buscar_activo, httpOption );
  }
}
