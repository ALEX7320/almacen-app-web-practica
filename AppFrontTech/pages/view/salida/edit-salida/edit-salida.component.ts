import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductoService } from '../../../../services/producto.service';
import { LoginService } from '../../../../services/login.service';
import { IngresoService } from '../../../../services/ingreso.service';
import { ProveedorService } from 'services/proveedor.service';
import { SalidaService } from 'services/salida.service';

@Component({
  selector: 'app-edit-salida',
  templateUrl: './edit-salida.component.html',
  styleUrls: ['./edit-salida.component.css']
})
export class EditSalidaComponent implements OnInit {

  public producto_id = 0; // ID PRODUCTO

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

  public salida_id = 0; // ID SALIDA

  // OBJ SALIDA
  public salida: any =    {
    salida_fecha: null,
    salida_cantidad: 0,
    salida_detalle: "",
    producto_id: {
        producto_id: null
    }
  }

  constructor(private productoService:ProductoService,private snack:MatSnackBar,private router:Router, 
    private loginService:LoginService , private salidaService:SalidaService, private proveedorService:ProveedorService, private route:ActivatedRoute) { }


  ngOnInit(): void {

    // OBTENER ID INGRESADO EN LA URL producto/{id}
    this.producto_id = this.route.snapshot.params['producto_id'];
    // OBTENER ID INGRESADO EN LA URL salida/{id}
    this.salida_id = this.route.snapshot.params['salida_id'];

    // CARGAR EL PRODUCTO SELECCIONADO
    this.productoService.obtenerProducto(this.producto_id).subscribe(
      (data) => {
        this.producto = data;
        this.salida.producto_id=this.producto
      },
      (error) => {
        console.log(error);
      }
    )

    // CARGAR SALIDAS DEL PRODUCTO SELECCIONADO
    this.salidaService.obtenerSalida(this.salida_id).subscribe(
      (data) => {
        this.salida = data;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar datos de salida.','error');

      }
    )
    
  }


  /* ACTUALIZAR */
  actualizarSalida(){

    // VALIDACIONES DE DATOS /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

    if(this.salida.salida_cantidad==null || this.salida.salida_cantidad<=0){
      this.snack.open('Ingrese el cantidad.','Aceptar',{duration:3000})
      return;
    }
    else if(this.salida.salida_fecha==null){
      this.snack.open('Ingrese la fecha.','Aceptar',{duration:3000})
      return;
    }
    else if(!this.validarCamposVacios(this.salida.salida_detalle)){
      this.snack.open('Ingrese la descripción.','Aceptar',{duration:3000})
      return;
    }  


    // PUT | ACTUALIZAR
    this.salidaService.editarSalida(this.salida).subscribe(
      (data) => {
        Swal.fire('Salida actualizado','La salida ha sido actualizado con éxito','success').then(
          (e) => {
            this.router.navigate(['/app/salida/producto/'+this.producto_id]);
          }
        );        
      },
      (error) => {
        Swal.fire('Error en el sistema','No se ha podido actualizar la salida','error');
        console.log(error);
      }
    ) 


  }


  // VALIDACR CAMPOS STR VACIOS
  validarCamposVacios(inputText:any){
    if(inputText==undefined || inputText==null || inputText.trim() == ''){
      return false;
    }else{
      return true;
    }
  }


}
