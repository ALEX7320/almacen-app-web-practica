import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductoService } from '../../../../services/producto.service';
import { LoginService } from '../../../../services/login.service';
import { IngresoService } from '../../../../services/ingreso.service';


@Component({
  selector: 'app-view-ingreso',
  templateUrl: './view-ingreso.component.html',
  styleUrls: ['./view-ingreso.component.css']
})
export class ViewIngresoComponent implements OnInit {

  // COLUMNAS QUE SE VISIALIZARAN EN LA TABLA
  public displayedColumns: string[] = ['ingreso_id', 'ingreso_fecha', 'ingreso_cantidad', 'proveedor_id', 'ingreso_detalle','actions'];
  public ingreso:any=[ ]; // LISTADO DE OBJ INGRESO

  public isAdmin = false; // SABER SI ES ADMIN
  public producto_id = 0; // PRODUCTO ID

  // OBJ PRODUCTO
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
              private loginService:LoginService , private ingresoService:IngresoService, private route:ActivatedRoute) { }

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
    this.ingresoService.listarIngresoPorProducto(this.producto_id).subscribe(
      (dato:any) => {
        this.ingreso = dato;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar listado de ingreso.','error');

      }
    )
  }

  // BTN ELIMINAR INGRESO
  eliminarIngreso(ingreso_id:any){
    Swal.fire({
      title:'Eliminar ingreso',
      text:'¿Estás seguro de eliminar el ingreso?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        this.ingresoService.eliminarIngreso(ingreso_id).subscribe(
          (data) => {
            this.ingreso = this.ingreso.filter((ingreso:any) => ingreso.ingreso_id != ingreso_id);
            Swal.fire('Ingreso eliminado','El ingreso ha sido eliminado de la base de datos.','success');
          },
          (error) => {
            Swal.fire('Error','Error al eliminar el ingreso.','error');
            console.log(error)
          }
        )
      }
    })
  }


}
