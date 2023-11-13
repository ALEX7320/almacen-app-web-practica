import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../../services/categoria.service';
import  Swal  from 'sweetalert2';
import { LoginService } from 'services/login.service';

@Component({
  selector: 'app-view-categoria',
  templateUrl: './view-categoria.component.html',
  styleUrls: ['./view-categoria.component.css'],
})
export class ViewCategoriaComponent implements OnInit {


  // LISTA DE CATEGORIAS
  public categoria:any = [];
  public isAdmin = false; // IDENTIFICAR__USUARIO_ADMIN

  constructor(private categoriaService:CategoriaService, private loginService: LoginService) {}

  ngOnInit(): void {

    // SETEAR USUARIO ADMIN
    if(this.loginService.getUserRole() == 'ADMIN'){this.isAdmin=true;}

    // CARGAR LISTADO
    this.categoriaService.listarCategorias().subscribe(
      (dato:any) => {
        this.categoria = dato;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar las categorías','error');
      }
    )

  }




}
