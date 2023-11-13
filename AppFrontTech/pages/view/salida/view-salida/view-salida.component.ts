import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductoService } from '../../../../services/producto.service';
import { LoginService } from '../../../../services/login.service';
import { IngresoService } from '../../../../services/ingreso.service';
import { SalidaService } from 'services/salida.service';


@Component({
  selector: 'app-view-salida',
  templateUrl: './view-salida.component.html',
  styleUrls: ['./view-salida.component.css']
})
export class ViewSalidaComponent implements OnInit {

  // COLUMNAS DISPONIBLES PARA MOSTRAR EN LA TABLA
  public displayedColumns: string[] = ['salida_id', 'salida_fecha', 'salida_cantidad', 'salida_detalle','actions'];
  public salida:any=[ ]; // LISTADO DE OBJ INGRSO

  public isAdmin = false; // SABER SI ES ADMIN
  public producto_id = 0; // PRODUCTO ID

  // OBJ PROCUTO
  public producto: any = {
    producto_nombre: '',
    producto_descripcion: '',
    producto_precio: 0.0,
    producto_imagen: '',
    producto_estado: true,
    categoria_id: {
      categoria_id:0
    },
  };
  

  constructor(private productoService:ProductoService,private snack:MatSnackBar,private router:Router, 
    private loginService:LoginService , private salidaService:SalidaService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    // OBTENER ID INGRESADO EN LA URL producto/{id}
    this.producto_id = this.route.snapshot.params['producto_id'];

    // CARGAR ROL, VALIDACION SI ES ADMIN
    if(this.loginService.getUserRole() == 'ADMIN'){this.isAdmin=true;}

    // CARGAR EL PRODUCTO SELECCIONADO
    this.productoService.obtenerProducto(this.producto_id).subscribe(
      (data) => {
        this.producto = data;
      },
      (error) => {
        console.log(error);
      }
    )

    // CARGAR INGRESOS DEL PRODUCTO SELECCIONADO
    this.salidaService.listarSalidaPorProducto(this.producto_id).subscribe(
      (dato:any) => {
        this.salida = dato;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar listado de salidas.','error');

      }
    )

  }


  /* ELIMINAR */
  eliminarSalida(salida_id:any){
    Swal.fire({
      title:'Eliminar salida',
      text:'¿Estás seguro de eliminar la salida?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        // DELETE | ELIMINAR
        this.salidaService.eliminarSalida(salida_id).subscribe(
          (data) => {
            this.salida = this.salida.filter((salida:any) => salida.salida_id != salida_id);
            Swal.fire('Salida eliminada','La salida ha sido eliminado de la base de datos.','success');
          },
          (error) => {
            Swal.fire('Error','Error al eliminar la salida.','error');
          }
        )
      }
    })
  }


}
