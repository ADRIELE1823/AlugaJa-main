import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interface/Iusuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  apiUrl = 'http://localhost:3000/api/clientes'; 

  constructor(private http: HttpClient) {}

  getUsuario(): Observable<Usuario[]> {
      return this.http.get<Usuario[]>(this.apiUrl);
  }
}
