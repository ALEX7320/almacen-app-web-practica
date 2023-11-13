import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductoService } from '../../../../services/producto.service';
import { LoginService } from '../../../../services/login.service';
import { SalidaService } from 'services/salida.service';

@Component({
  selector: 'app-add-salida',
  templateUrl: './add-salida.component.html',
  styleUrls: ['./add-salida.component.css']
})
export class AddSalidaComponent implements OnInit {

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
    private loginService:LoginService , private salidaService:SalidaService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    // OBTENER ID INGRESADO EN LA URL producto/{id}
    this.producto_id = this.route.snapshot.params['producto_id'];

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
    
  }


  
  /* ACTUALIZAR */
  guardarSalida(){

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


    // POST | AGREGAR 
    this.salidaService.agregarSalida(this.salida).subscribe(
      (dato:any) => {

        console.log(dato)
        Swal.fire('Salida agregado','La salida ha sido agregada con éxito','success');

        // RESETEAR
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
        this.salida =    {
          salida_fecha: "",
          salida_cantidad: 0,
          salida_detalle: "",
          producto_id: {
              producto_id: 0
          }
        }

        this.router.navigate(['/app/salida/producto/'+this.producto_id]);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al guardar la categoría','error')
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
