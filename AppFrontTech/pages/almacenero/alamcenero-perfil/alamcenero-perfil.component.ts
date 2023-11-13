import { Component, OnInit } from '@angular/core';
import { LoginService } from 'services/login.service';

@Component({
  selector: 'app-alamcenero-perfil',
  templateUrl: './alamcenero-perfil.component.html',
  styleUrls: ['./alamcenero-perfil.component.css']
})
export class AlamceneroPerfilComponent implements OnInit {

  public user:any = null; // OBJ USUARIO

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
    // OBTENER USUARIO ACTUAL
    this.user = this.loginService.getUser();
  }

}
