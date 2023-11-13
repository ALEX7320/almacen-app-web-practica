import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'services/login.service';
import { UserService } from 'services/user.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-view-usuario',
  templateUrl: './view-usuario.component.html',
  styleUrls: ['./view-usuario.component.css']
})
export class ViewUsuarioComponent implements OnInit {

  public usuario:any = [] // LISTADO OBJ USUARIO 

  // // OBJ USUSARIO
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
          rolId: 0
        }    
    ]
  };

  public currentUserName=""; // NOMBRE DE USUARIO ACTUAL

  constructor(private snack:MatSnackBar,private router:Router,private userService: UserService,
    private loginService: LoginService) { }

  ngOnInit(): void {

    // OBTENER USUSARIO ACTUAL
    this.loginService.getCurrentUser().subscribe(
      (dato:any) => {
        this.currentUserName=dato.username
      },
      (error) => {
        console.log(error);
      }
    )

    // LISTADO USUSARIO
    this.userService.listarUsuarios().subscribe(
      (dato:any) => {
        this.usuario = dato;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar los usuarios.','error');
      }
    )


  }


  /* ELIMINAR */
  eliminarUsuario(usuarioId:any){
    Swal.fire({
      title:'Eliminar usuario',
      text:'¿Estás seguro de eliminar el usuario?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        // DELETE | ELIMINAR
        this.userService.eliminarUsuario(usuarioId).subscribe(
          (data) => {
            this.usuario = this.usuario.filter((usuario:any) => usuario.usuarioId != usuarioId);
            Swal.fire('Usuario eliminado','El usuario ha sido eliminado de la base de datos','success');
          },
          (error) => {
            Swal.fire('Error','Error al eliminar el usuario.','error');
          }
        )
      }
    })
  }


}
