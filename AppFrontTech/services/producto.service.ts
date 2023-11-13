import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) {}

  public listarProducto(){
    return this.http.get(`${baserUrl}/producto`);
  }

  public agregarProducto(producto:any){
    return this.http.post(`${baserUrl}/producto`,producto);
  }

  public eliminarProducto(producto_id:any){
    return this.http.delete(`${baserUrl}/producto/${producto_id}`);
  }

  public obtenerProducto(producto_id:any){
    return this.http.get(`${baserUrl}/producto/${producto_id}`);
  }

  public editarProducto(producto:any){
    return this.http.put(`${baserUrl}/producto/${producto.producto_id}`,producto);
  }

}
