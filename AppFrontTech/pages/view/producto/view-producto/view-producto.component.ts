import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductoService } from '../../../../services/producto.service';
import { LoginService } from '../../../../services/login.service';





@Component({
  selector: 'app-view-producto',
  templateUrl: './view-producto.component.html',
  styleUrls: ['./view-producto.component.css']
})
export class ViewProductoComponent implements OnInit {

  // COLUMNAS QUE SE MOSTRARÁN EN LA TABLA
  public displayedColumns: string[] = ['producto_id', 'producto_imagen','producto_nombre', 'producto_precio','categoria_id','actions'];
  public producto:any=[ ]; // LISTADO OBJETO PRODUCTO
  public isAdmin = false; // IDENTIFICAR__USUARIO_ADMIN

  constructor(private route:ActivatedRoute,private productoService:ProductoService,private snack:MatSnackBar,private router:Router, private loginService:LoginService) { }

  ngOnInit(): void {

    // SETEAR USUARIO AMIN
    if(this.loginService.getUserRole() == 'ADMIN'){this.isAdmin=true;}

    // CARGAR LISTA PRODUCTOS
    this.productoService.listarProducto().subscribe(
      (dato:any) => {
        this.producto = dato;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar los productos','error');
      }
    )

  }


  // BOTON ELIMINAR PRODUCTO
  eliminarProducto(producto_id:any){
    Swal.fire({
      title:'Eliminar producto',
      text:'¿Estás seguro de eliminar el producto?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        // DELETE 
        this.productoService.eliminarProducto(producto_id).subscribe(
          (data) => {
            this.producto = this.producto.filter((producto:any) => producto.producto_id != producto_id);
            Swal.fire('Producto eliminado','El producto ha sido eliminado','success');
          },
          (error) => {
            console.log(error);
            Swal.fire('Error','Error al eliminar el producto','error');
          }
        )
      }
    })
  }




}
