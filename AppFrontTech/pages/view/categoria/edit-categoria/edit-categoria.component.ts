import { Component, OnInit } from '@angular/core';
import  Swal  from 'sweetalert2';
import { CategoriaService } from '../../../../services/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit {


  public categoria_id = 0; // ID CATEGORIA
  public categoria: any = { }; // OBJETO CATEGORIA

  constructor(private route:ActivatedRoute, private categoriaService:CategoriaService, private router:Router,
              private snack:MatSnackBar) { }

  ngOnInit(): void {

    // OBTENER ID INGRESADO EN LA URL categoria/{id}
    this.categoria_id = this.route.snapshot.params['categoria_id'];

    // OBTENER OBJETO CATEGORIA POR ID
    this.categoriaService.obtenerCategoria(this.categoria_id).subscribe(
      (data) => {
        this.categoria = data;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar datos de la categoría.','error');

      }
    )
  }

  /* ACTUALIZAR DATOS */
  public actualizarDatos(){

    // VALIDACIONES DE DATOS /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

    if(!this.validarCamposVacios(this.categoria.categoria_nombre)){
      this.snack.open('Ingrese el nombre.','Aceptar',{duration:3000})
      return;
    }


    // PUT | EDITAR CATEGORIA
    this.categoriaService.editarCategoria(this.categoria).subscribe(
      (data) => {
        Swal.fire('Categoria actualizada','La categoría ha sido actualizado con éxito','success').then(
          (e) => {
            this.router.navigate(['/app/categoria']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','No se ha podido actualizar la categoría','error');
        console.log(error);
      }
    )
  }


  
  // VALIDA CAMPOS VACIOS
  validarCamposVacios(inputText:any){
    if(inputText==undefined || inputText==null || inputText.trim() == ''){
      return false;
    }else{
      return true;
    }
  }

}
