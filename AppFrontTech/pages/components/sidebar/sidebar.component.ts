import { Component, OnInit } from '@angular/core';
import { LoginService } from 'services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public isAdmin = false; // IDENTIFICAR__USUARIO_ADMIN
  public rolName = ""; // NOMBRE DE ROL

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

    // OBTENER ROL DEL USUARIO ACTUAL
    this.rolName = this.loginService.getUserRole();

    // SETEAR USUARIO AMIN
    if(this.rolName == 'ADMIN'){this.isAdmin=true;}
  }

}
