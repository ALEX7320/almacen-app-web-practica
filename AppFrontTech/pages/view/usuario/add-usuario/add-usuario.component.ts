import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'services/login.service';
import { UserService } from 'services/user.service';

import Swal from 'sweetalert2';

import * as $ from 'jquery';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {


  public listaUsuarios:any=[] // LISTAO OBJ USUARIO
  public rol:any=[]; // LISTADO OBJ ROL

  // OBJ USUARIO
  public user = {
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

  constructor(private userService: UserService, private snack: MatSnackBar,
    private router:Router) {}

  ngOnInit(): void {
    
    // CARGAR ROLES
    this.userService.getRolesBD().subscribe(
      (data:any) => {
        this.rol = data;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar los roles.','error');

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

  /* GUARDAR */
  formSubmit() {
    
    // VALIDACIONES DE DATOS /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

    for(const index in this.listaUsuarios){
      if(this.listaUsuarios[index].username===this.user.username){
        this.snack.open('Nombre de usuario ya se encuentra registrado.','Aceptar',{duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'right',});
        return;
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
    else if(!this.validarCamposVacios(this.user.username)){
      this.snack.open('Ingrese el nombre de usuario.','Aceptar',{duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'right',});
      return;
    }
    else if(!this.validarCamposVacios(this.user.password)){
      this.snack.open('Ingrese la contraseña.','Aceptar',{duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'right',});
      return;
    }

    else if(this.user.roles[0].rolId==null){
      this.snack.open('Seleccione un rol.','Aceptar',{duration: 3000,verticalPosition: 'bottom',horizontalPosition: 'right',});
      return;
    }

    // POST | AGREGAR USUARIO      
    this.userService.agregarUsuario(this.user).subscribe(
      (data) => {
          console.log(data);

          // ALERTA : MODAL
          Swal.fire('Usuario registrado','El usuario ha sido registrado con éxito','success')

          // RESETEAR VALORES
          this.user = {
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

          this.router.navigate(['/app/usuario']);
        },
        (error) => {
          console.log(error);
          Swal.fire('Error en el sistema','No se ha podido registrar el usuario','error');

        }
      );
      
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
