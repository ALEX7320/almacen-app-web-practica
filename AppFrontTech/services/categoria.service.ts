import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) {}

  public listarCategorias(){
    return this.http.get(`${baserUrl}/categoria`);
  }

  public listarCategoriasDisponible(){
    return this.http.get(`${baserUrl}/categoria/active`);
  }

  public agregarCategoria(categoria:any){
    return this.http.post(`${baserUrl}/categoria`,categoria);
  }
 
  public obtenerCategoria(categoria_id:any){
    return this.http.get(`${baserUrl}/categoria/${categoria_id}`);
  }
 
  public editarCategoria(categoria:any){
    return this.http.put(`${baserUrl}/categoria/${categoria.categoria_id}`,categoria);
  }


}
