import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  constructor(private http: HttpClient) {}

  public listarIngresoPorProducto(producto_id:any){
    return this.http.get(`${baserUrl}/ingreso/producto/${producto_id}`);
  }
  
  public agregarIngreso(ingreso:any){
    return this.http.post(`${baserUrl}/ingreso`,ingreso);
  }

  public eliminarIngreso(ingreso_id:any){
    return this.http.delete(`${baserUrl}/ingreso/${ingreso_id}`);
  }

  public obtenerIngreso(ingreso_id:any){
    return this.http.get(`${baserUrl}/ingreso/${ingreso_id}`);
  }

  public editarIngreso(ingreso:any){
    return this.http.put(`${baserUrl}/ingreso/${ingreso.ingreso_id}`,ingreso);
  }


}
