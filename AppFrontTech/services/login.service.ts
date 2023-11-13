import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  public loginStatusSubjec = new Subject<boolean>();

  constructor(private http: HttpClient,private router:Router) {}

  //generamos el token
  public generateToken(loginData: any) {
    return this.http.post(`${baserUrl}/authenticate`, loginData);
  }


  

  //iniciamos sesión y establecemos el token en el localStorage /*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
  public loginUser(token: any) {
    localStorage.setItem('token', token);
  }

  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  // cerrar sesion y eliminar el token del localStorage /*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //obtenemos el token /*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
  public getToken() {
    return localStorage.getItem('token');
  }



  // usuario /*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/

  public setUser(user:any){
    // convierte un valor de JS a JSON
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  public getUserRole(){
    // obtener autoridades
    let user = this.getUser();
    return user.roles[0].rolNombre;
  }

  // usuario actual /*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
  public getCurrentUser(){
    return this.http.get(`${baserUrl}/actual-usuario`);
  }

  // usuario actual /*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
  public getStateToken(){
    return this.http.get(`${baserUrl}/token-estado`);
  }
  
  
}
