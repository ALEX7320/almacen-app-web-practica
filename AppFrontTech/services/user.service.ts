import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';
import { Observable } from 'rxjs/internal/Observable';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  public agregarUsuario(user:Object): Observable<Object> {
    return this.http.post(`${baserUrl}/usuario`,user);
  }

  public listarUsuarios(){
    return this.http.get(`${baserUrl}/usuario`);
  }

  public obtenerUsuario(usuarioId:any){
    return this.http.get(`${baserUrl}/usuario/${usuarioId}`);
  }

  public editarUsuario(usuario:any){
    return this.http.put(`${baserUrl}/usuario/${usuario.usuarioId}`,usuario);
  }

  public editarUsuarioNoPassword(usuario:any){
    return this.http.put(`${baserUrl}/usuario/no-password/${usuario.usuarioId}`,usuario);
  }

  public eliminarUsuario(usuarioId:any){
    return this.http.delete(`${baserUrl}/usuario/${usuarioId}`);
  }


  // LISTA ROLES DIPOSNIBLES BD /*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
  public getRolesBD(){
    return this.http.get(`${baserUrl}/list-rol`);
  }

}
