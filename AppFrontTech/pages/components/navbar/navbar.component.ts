import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LoginService } from 'services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isAdmin = false; // IDENTIFICAR__USUARIO_ADMIN

  isLoggedIn = false;
  user:any = null;

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {

    this.isLoggedIn = this.loginService.isLoggedIn();
    this.user = this.loginService.getUser();

    
    this.loginService.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.loginService.isLoggedIn();
        this.user = this.loginService.getUser();
      }
    )

    // SETEAR USUARIO AMIN
    if(this.loginService.getUserRole() == 'ADMIN'){this.isAdmin=true;}
    $("#general_total").removeClass("imagenLogin");


  }


  public logout(){
    this.loginService.logout();
    window.location.reload();
  }

  
  botonBarra(){

    // SI TOGGLE ESTA ACTIVO
    if(localStorage.getItem('sb|sidebar-toggle') == "YES"){
      localStorage.setItem('sb|sidebar-toggle', "NO");
      $("#general_total").removeClass("sb-sidenav-toggled"); // DESACTIVAMOS
    }
    // SI TOGGLE NO ESTA ACTIVO
    else{
      localStorage.setItem('sb|sidebar-toggle', "YES");
      $("#general_total").addClass("sb-sidenav-toggled") // ACTIVAMOS
    }


  }


}
