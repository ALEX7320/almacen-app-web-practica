import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../../../services/proveedor.service';
import  Swal  from 'sweetalert2';
import { LoginService } from 'services/login.service';

@Component({
  selector: 'app-view-proveedor',
  templateUrl: './view-proveedor.component.html',
  styleUrls: ['./view-proveedor.component.css']
})
export class ViewProveedorComponent implements OnInit {

  // LISTADO OBJETOS PROVEEDOR
  public proveedor:any = [];
  public isAdmin = false; // IDENTIFICAR__USUARIO_ADMIN

  constructor(private proveedorService:ProveedorService,private loginService: LoginService) { }

  ngOnInit(): void {

    // SETEAR USUARIO ADMIN
    if(this.loginService.getUserRole() == 'ADMIN'){this.isAdmin=true;}

    // CARGAR LISTADO 
    this.proveedorService.listarProveedores().subscribe(
      (dato:any) => {
        this.proveedor = dato;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar los porveedores','error');
      }
    )

  }

}
