import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaService } from '../../../../services/categoria.service';


@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddCategoriaComponent implements OnInit {

  // OBJETO CATEGORIA
  public categoria = {
    categoria_id : '',
    categoria_nombre : '',
    categoria_estado: true
  }

  constructor(private categoriaService:CategoriaService,private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }
  
  /* GUARDAR */
  formSubmit(){

    // VALIDACIONES DE DATOS /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
        
    if(!this.validarCamposVacios(this.categoria.categoria_nombre)){
      this.snack.open('Ingrese el nombre.','Aceptar',{duration:3000})
      return;
    }


    // POST | GUARDAR CATEGORIA
    this.categoriaService.agregarCategoria(this.categoria).subscribe(
      (dato:any) => {
        // RESETAR VALORES
        this.categoria.categoria_nombre = '';
        this.categoria.categoria_estado = true;

        Swal.fire('Categoría agregada','La categoría ha sido agregada con éxito','success');
        this.router.navigate(['/app/categoria']);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al guardar la categoría','error')
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
