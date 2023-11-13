import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'services/login.service';
import { UserService } from 'services/user.service';
import Swal from 'sweetalert2';
import * as $ from 'jquery';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {


  public listaUsuarios:any=[] // LISTADO OBJ USUARIO
  public rol:any=[]; // LISTADO OBJ ROL
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

  public currentUserName=""; // NOMBRE USUARIO, DE USUARIO ACTUAL

  constructor(private userService: UserService, private snack: MatSnackBar,
    private router:Router,private route:ActivatedRoute,private loginService: LoginService) {}

  ngOnInit(): void {

    // OBTENER ID INGRESADO EN LA URL usuario/{id}
    this.usuarioId = this.route.snapshot.params['usuarioId'];

    // OBTENER USUARIO SELECCIONADO
    this.userService.obtenerUsuario(this.usuarioId).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar datos de usuario.','error');
      }
    )

    // OBTENER LISTADO ROLES
    this.userService.getRolesBD().subscribe(
      (data:any) => {
        this.rol = data;
      },
      (error) => {
        console.log(error);
      }
    )

    // OBTENER USUARIO ACTUAL
    this.loginService.getCurrentUser().subscribe(
      (dato:any) => {
        this.currentUserName=dato.username
      },
      (error) => {
        console.log(error);
      }
    )

    // CARGAR LISTADO DE USUARIO [PARA VERIFICAR DATOS DUPLICADOS]
    this.userService.listarUsuarios().subscribe(
      (dato:any) => {
        this.listaUsuarios = dato;
      },
      (error) => {
        console.log(error);
      }
    )

  }
  

  // ACTUALIZAR DATOS
  actualizarDatos(){

    // VALIDACIONES DE DATOS /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

    for(const index in this.listaUsuarios){
      if(this.listaUsuarios[index].usuarioId==this.user.usuarioId){
        continue;
      }
      else if(this.listaUsuarios[index].dni===this.user.dni){
        this.snack.open('DNI se encuentra registrado.','Aceptar',{duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'right',});
        return;          
      }
      else if(this.listaUsuarios[index].email===this.user.email){
        this.snack.open('Email ya se encuentra registrado.','Aceptar',{duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'right',});
        return;
      }
    }

    if(!this.validarCamposVacios(this.user.nombre)){
      this.snack.open('Ingrese el nombre.','Aceptar',{duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'right',});
      return;
    }
    else if(!this.validarCamposVacios(this.user.apellido)){
      this.snack.open('Ingrese el apellido.','Aceptar',{duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'right',});
      return;
    }
    else if(!this.validarCamposVacios(this.user.email)){
      this.snack.open('Ingrese el email.','Aceptar',{duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'right',});
      return;
    }
    else if(!this.validarCamposVacios(this.user.telefono)){
      this.snack.open('Ingrese el telefono.','Aceptar',{duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'right',});
      return;
    }
    else if(!this.validarCamposVacios(this.user.direccion)){
      this.snack.open('Ingrese la dirección.','Aceptar',{duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'right',});
      return;
    }
    else if(!this.validarCamposVacios(this.user.dni)){
      this.snack.open('Ingrese el dni.','Aceptar',{duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'right',});
      return;
    }
    else if(this.user.roles[0].rolId==null){
      this.snack.open('Seleccione un rol.','Aceptar',{duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'right',});
      return;
    }



    // PUT | ACTUALIZAR DATOS (MENOS LA CONTRASEÑA)
    this.userService.editarUsuarioNoPassword(this.user).subscribe(
      (data) => {
        Swal.fire('Usuario actualizado','El usuario ha sido actualizado con éxito','success').then(
          (e) => {
            this.router.navigate(['/app/usuario']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','No se ha podido actualizar el usuario','error');
        console.log(error);
      }
    )
    
  }


  // VALIDAR INGRESOS SOLO DE NUMEROS EN INPUT
  valuechangeDni(text_value: string): void {  
    // VALIDAR INGRESO NUMERO
    $(document).on("input", "#dni", function () {
      this.value = this.value.replace(/[^0-9]/g, '');
    })  
    try{
      this.user.dni = text_value.replace(/[^0-9]/g, '');      
    }catch{}
  }

  // VALIDAR INGRESOS SOLO DE NUMEROS EN INPUT
  valuechangeTelefono(text_value: string): void {  
    // VALIDAR INGRESO NUMERO
    $(document).on("input", "#telefono", function () {
      this.value = this.value.replace(/[^0-9]/g, '');
    })  
    try{
      this.user.telefono = text_value.replace(/[^0-9]/g, '');      
    }catch{}
  }
  

  // VALIDAR CAMPOST VACIOS
  validarCamposVacios(inputText:any){
    if(inputText==undefined || inputText==null || inputText.trim() == ''){
      return false;
    }else{
      return true;
    }
  }

  

}
 