import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http: HttpClient) {}

  public listarProveedores(){
    return this.http.get(`${baserUrl}/proveedor`);
  }

  public listarProveedoresDisponible(){
    return this.http.get(`${baserUrl}/proveedor/active`);
  }

  public agregarProveedor(proveedor:any){
    return this.http.post(`${baserUrl}/proveedor`,proveedor);
  }

  public obtenerProveedor(proveedor_id:any){
    return this.http.get(`${baserUrl}/proveedor/${proveedor_id}`);
  }
 
  public editarProveedor(proveedor:any){
    return this.http.put(`${baserUrl}/proveedor/${proveedor.proveedor_id}`,proveedor);
  }

}
