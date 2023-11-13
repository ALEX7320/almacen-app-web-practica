import { Component, OnInit } from '@angular/core';
import  Swal  from 'sweetalert2';
import { ProveedorService } from '../../../../services/proveedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-edit-proveedor',
  templateUrl: './edit-proveedor.component.html',
  styleUrls: ['./edit-proveedor.component.css']
})
export class EditProveedorComponent implements OnInit {


  public proveedor_id = 0; // ID PROVEEDOR
  public proveedor: any = { }; // OBJ PROVEEDOR

  constructor(private route:ActivatedRoute, private proveedorService:ProveedorService, private router:Router
    ,private snack:MatSnackBar) { }


  ngOnInit(): void {

    // OBTENER ID INGRESADO EN LA URL seleccionada/{id}
    this.proveedor_id = this.route.snapshot.params['proveedor_id'];

    // OBTENER PROVEEDOR SELECCIONADO
    this.proveedorService.obtenerProveedor(this.proveedor_id).subscribe(
      (data) => {
        this.proveedor = data;
      },
      (error) => {
        Swal.fire('Error','Error al cargar datos de proveedor.','error');
        console.log(error);
      }
    )
  }

  /* ACTUALIZAR */
  public actualizarDatos(){

    // VALIDACIONES DE DATOS /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

    if(!this.validarCamposVacios(this.proveedor.proveedor_nombre)){
      this.snack.open('Ingrese el nombre.','Aceptar',{duration:3000})
      return;
    }

    // PUT | ACTUALIZAR DATOS
    this.proveedorService.editarProveedor(this.proveedor).subscribe(
      (data) => {
        Swal.fire('Proveedor actualizado','El proveedor ha sido actualizado con éxito','success').then(
          (e) => {
            this.router.navigate(['/app/proveedor']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','No se ha podido actualizar el proveedor','error');
        console.log(error);
      }
    )
  }

  // VALIDA CAMPOS VACIOS
  validarCamposVacios(inputText:any){
    if(inputText==undefined || inputText==null || inputText.trim() == ''){
      return false;
    }else{
      return true;
    }
  }


}
