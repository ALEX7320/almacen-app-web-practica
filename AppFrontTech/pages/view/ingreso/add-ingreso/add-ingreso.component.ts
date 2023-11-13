import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductoService } from '../../../../services/producto.service';
import { LoginService } from '../../../../services/login.service';
import { IngresoService } from '../../../../services/ingreso.service';
import { ProveedorService } from 'services/proveedor.service';

@Component({
  selector: 'app-add-ingreso',
  templateUrl: './add-ingreso.component.html',
  styleUrls: ['./add-ingreso.component.css']
})
export class AddIngresoComponent implements OnInit {

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

  // OBJ INGRESO
  public ingreso: any =    {
    ingreso_fecha: null,
    ingreso_cantidad: 0,
    ingreso_detalle: "",
    producto_id: {
        producto_id: null
    },
    proveedor_id: {
        proveedor_id: null
    }
  }
  
  public proveedor: any = [] // LISTADO DE OBJ PRODUCTO

  constructor(private productoService:ProductoService,private snack:MatSnackBar,private router:Router, 
    private loginService:LoginService , private ingresoService:IngresoService, private proveedorService:ProveedorService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    // OBTENER ID INGRESADO EN LA URL producto/{id}
    this.producto_id = this.route.snapshot.params['producto_id'];

    // CARGAR EL PRODUCTO SELECCIONADO
    this.productoService.obtenerProducto(this.producto_id).subscribe(
      (data) => {
        this.producto = data;
        this.ingreso.producto_id=this.producto
      },
      (error) => {
        console.log(error);
      }
    )

    // CARGAR LISTA DE PROVEEDORES DISPONIBLES
    this.proveedorService.listarProveedoresDisponible().subscribe(
      (dato:any) => {
        this.proveedor = dato;
      },(error) => {
        console.log(error);
      }
    )

  }


  /* GUARDAR */
  guardarIngreso(){

    // VALIDACIONES DE DATOS /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

    if(this.ingreso.ingreso_cantidad==null || this.ingreso.ingreso_cantidad<=0){
      this.snack.open('Ingrese el cantidad.','Aceptar',{duration:3000})
      return;
    }
    else if(this.ingreso.ingreso_fecha==null){
      this.snack.open('Ingrese la fecha.','Aceptar',{duration:3000})
      return;
    }
    else if(!this.validarCamposVacios(this.ingreso.ingreso_detalle)){
      this.snack.open('Ingrese la descripción.','Aceptar',{duration:3000})
      return;
    }
    else if(this.ingreso.proveedor_id.proveedor_id==null){
      this.snack.open('Seleccione el proveedor.','Aceptar',{duration:3000})
      return;
    }

    // POST | ACTUALIZAR
    this.ingresoService.agregarIngreso(this.ingreso).subscribe(
      (dato:any) => {

        console.log(dato)

        Swal.fire('Ingreso agregado','El ingreso ha sido agregada con éxito','success');

        // RESETEAR VALORES
        this.producto = {
                  producto_nombre: '',
                  producto_descripcion: '',
                  producto_precio: 0.0,
                  producto_imagen: '',
                  producto_estado: true,
                  categoria_id: {
                    categoria_id:0
                  },
                };
        this.ingreso =    {
          ingreso_fecha: null,
          ingreso_cantidad: 0,
          ingreso_detalle: "",
          producto_id: {
              producto_id: null
          },
          proveedor_id: {
              proveedor_id: null
          }
        }
        this.router.navigate(['/app/ingreso/producto/'+this.producto_id]);
      },
      (error) => {
        Swal.fire('Error en el sistema','No se ha podido agregar el ingreso','error');
        console.log(error);
      }
    )

  }

      
  validarCamposVacios(inputText:any){
    if(inputText==undefined || inputText==null || inputText.trim() == ''){
      return false;
    }else{
      return true;
    }
  }





}
