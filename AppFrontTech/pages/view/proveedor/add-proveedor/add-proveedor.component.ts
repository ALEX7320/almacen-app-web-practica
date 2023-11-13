import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProveedorService } from '../../../../services/proveedor.service';

@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css']
})
export class AddProveedorComponent implements OnInit {

  // OBJETO PROVEEDOR
  public proveedor = {
    proveedor_id : '',
    proveedor_nombre : '',
    proveedor_estado: true
  }

  constructor(private proveedorService:ProveedorService,private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }


  /* GUARDAR */
  formSubmit(){

    // VALIDACIONES DE DATOS /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

    if(!this.validarCamposVacios(this.proveedor.proveedor_nombre)){
      this.snack.open('Ingrese el nombre.','Aceptar',{duration:3000})
      return;
    }

    // POST | GUARDAR
    this.proveedorService.agregarProveedor(this.proveedor).subscribe(
      (dato:any) => {
        // RESETEAR VALORES
        this.proveedor.proveedor_nombre = '';
        this.proveedor.proveedor_estado = true;

        Swal.fire('Proveedor agregado','El proveedor ha sido agregada con éxito','success');
        this.router.navigate(['/app/proveedor']);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al guardar el proveedor','error')
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
