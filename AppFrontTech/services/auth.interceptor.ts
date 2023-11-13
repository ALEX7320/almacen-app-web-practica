import { LoginService } from './login.service';
import {  HttpEvent,  HttpHandler,  HttpInterceptor,  HttpRequest,  HTTP_INTERCEPTORS,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  // aplicar el token en la cabecera
  intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.loginService.getToken();
    
    if (token != null) {
      authReq = authReq.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });

      // CAPTURA LOS ERRORES DE CONSULTA ----------------------------
      return next.handle(authReq).pipe(
        catchError(errordata=>{

          if(errordata.status===500){
            // SE VALIDA SI EL TOKEN HA EXPIRADO
            this.loginService.getStateToken().subscribe(
              (dato:any) => {
                if(dato.estado==false){
                  console.log("Token Expirado!");
                  this.loginService.logout()
                  window.location.href="/login?account=tokenExpired" // SE USA LOCATION.HREF PARA EVITAR QUE SE QUEDE ABIERTO LOS MODALES 
                  // this.router.navigate(['/login'],{ queryParams: { account: 'tokenExpired' } });
                }
              }
            )

          }
          return throwError(errordata);
        })
      )
      // --------------------------------------------------------------


    }

    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true, //permite agregar varios Interceptores
  },
];
