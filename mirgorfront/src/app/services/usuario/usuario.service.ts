import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuario} from '../../entidades/usuario/usuario';

// Constante de los headers para los encabezados
const httpOption = {
  headers: new HttpHeaders({ 'content-type' : 'application/json',
                              }),
}


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'http://127.0.0.1:8000/'

  constructor( private http : HttpClient) { }

  getUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url + 'usuario' , httpOption)
  }
  registrarUsuario(formularioregistro:any):Observable<Usuario[]>{
    return this.http.post<Usuario[]>(this.url + 'usuario', formularioregistro, httpOption)
  }
  getUsuarioId(usuario : Usuario): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url + 'usuario/' + usuario.id,httpOption );
  }

  editarUsuario(formularioregistro: any, id: number): Observable<Usuario[]>{
    return this.http.put<Usuario[]>(this.url + 'usuario/' + id, formularioregistro, httpOption);

  }
  eliminarUsuario(id: number): Observable<Usuario[]>{
    return this.http.delete<Usuario[]>(this.url + 'usuario/' + id, httpOption );
  }
  busquedaUsuario(buscar_usuario:string): Observable<Usuario[]>{
    return  this.http.get<Usuario[]>(this.url + 'usuario/buscar/' + buscar_usuario, httpOption );
  }

}
