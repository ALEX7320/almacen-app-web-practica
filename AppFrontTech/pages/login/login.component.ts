import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {LoginService} from '../../services/login.service'
import { ActivatedRoute, Router } from '@angular/router';
import  Swal  from 'sweetalert2';
import {Location} from '@angular/common'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    "username" : '',
    "password" : '',
  }

  constructor(private snack:MatSnackBar,private loginService:LoginService,private router:Router,private route:ActivatedRoute, private location: Location) { }




  ngOnInit(): void {

    let param_queryNewClient = this.route.snapshot.queryParams['account'];

    if(param_queryNewClient == "tokenExpired"){
      // RESTABLECE URL 
      // DE: http://localhost:4500/login?account=tokenExpired
      //  A: http://localhost:4500/login
      this.location.replaceState(`/login`);

      Swal.fire({
        title:'Sesión expirada',
        text:'Su sesión ha expirado, debe ingresar nuevamente.',
        iconHtml: '<i class="fa-solid fa-user-lock" style="font-size:70%"></i>',
        confirmButtonColor:'#3085d6',
        confirmButtonText:'Aceptar',
      })

    }

  }

  formSubmit(){

    if(this.loginData.username == null || this.loginData.username.trim() == '' ){
      this.snack.open('El nombre de usuario es requerido !!','Aceptar',{
        duration:3000
      })
      return;
    }
    else if( this.loginData.password == null || this.loginData.password.trim() == ''){
      this.snack.open('La contraseña es requerida !!','Aceptar',{
        duration:3000
      })
      return;
    }


    this.loginService.generateToken(this.loginData).subscribe(
      (data:any) => {

        this.loginService.loginUser(data.token);

        this.loginService.getCurrentUser().subscribe((user:any) =>{

          this.loginService.setUser(user);
          
          if(this.loginService.getUserRole() == 'ADMIN'){
            //dashboard admin
            this.router.navigate(['app']);
            this.loginService.loginStatusSubjec.next(true); // SET DE ACTIVO
          }
          else if(this.loginService.getUserRole() == 'ALMACENERO'){
            //user dashboard
            this.router.navigate(['app']);
            this.loginService.loginStatusSubjec.next(true); // SET DE ACTIVO
          }
          else{
            this.loginService.logout();
          }

          this.loginData = {
            "username" : '',
            "password" : '',
          }


        })
        


        
      },(error) => {
        console.log(error);
        this.snack.open('Detalles inválidos , vuelva a intentar !!','Aceptar',{
          duration:3000
        })
      }
    )


  }

}
