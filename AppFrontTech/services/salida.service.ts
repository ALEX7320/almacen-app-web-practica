import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';


@Injectable({
  providedIn: 'root'
})
export class SalidaService {

  constructor(private http: HttpClient) {}

  public listarSalidaPorProducto(producto_id:any){
    return this.http.get(`${baserUrl}/salida/producto/${producto_id}`);
  }

  public agregarSalida(salida:any){
    return this.http.post(`${baserUrl}/salida`,salida);
  }

  public eliminarSalida(salida_id:any){
    return this.http.delete(`${baserUrl}/salida/${salida_id}`);
  }

  public obtenerSalida(salida_id:any){
    return this.http.get(`${baserUrl}/salida/${salida_id}`);
  }
  
  public editarSalida(salida:any){
    return this.http.put(`${baserUrl}/salida/${salida.salida_id}`,salida);
  }


}
