import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-usuario-password',
  templateUrl: './edit-usuario-password.component.html',
  styleUrls: ['./edit-usuario-password.component.css']
})
export class EditUsuarioPasswordComponent implements OnInit {


  public usuarioId=0; // USUARIO ID

  // OBJ USUARIO
  public user:any = {
      username: '',
      password: '',
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      direccion: '',
      dni: '',
      enabled: true,
      roles: [
        {
          rolId: null
        }    
    ]
  };

  public password2 = ""; // VALIDAR LA CONTRASEÑA 2 INGRESADA

  constructor(private userService: UserService, private snack: MatSnackBar,
    private router:Router,private route:ActivatedRoute) {}

    
  ngOnInit(): void {

    // OBTENER ID INGRESADO EN LA URL usuario/{id}
    this.usuarioId = this.route.snapshot.params['usuarioId'];

    // OBTENER USUARIO SELECCIONADO
    this.userService.obtenerUsuario(this.usuarioId).subscribe(
      (data) => {
        this.user = data;
        this.user.password=""
      },
      (error) => {
        console.log(error);
      }
    )


  }

  /* ACTUALIZAR DATOS */
  actualizarDatos(){

    // VALIDACIONES DE DATOS /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

    if(!this.validarCamposVacios(this.user.password)){
      this.snack.open('Ingrese la contraseña.','Aceptar',{duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'right',});
      return;
    }
    else if(this.user.password != this.password2 ){
      this.snack.open('Ambas contraseñas deben ser iguales.','Aceptar',{duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'right',});
      return;
    }
   
    // PUT | DATOS
    this.userService.editarUsuario(this.user).subscribe(
      (data) => {
        Swal.fire('Contraseña actualizada','La contraseña ha sido actualizado con éxito','success').then(
          (e) => {
            this.router.navigate(['/app/usuario']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','No se ha podido actualizar la contraseña','error');
        console.log(error);
      }
    )
  
  }
  
  // VALIDAR CAMPOS VACIOS
  validarCamposVacios(inputText:any){
    if(inputText==undefined || inputText==null || inputText.trim() == ''){
      return false;
    }else{
      return true;
    }
  }

}
