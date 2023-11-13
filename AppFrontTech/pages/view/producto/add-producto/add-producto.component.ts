import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../../services/categoria.service';
import { ProductoService } from '../../../../services/producto.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css'],
})
export class AddProductoComponent implements OnInit {

  public categoria:any = []; // OBJ LISTADO CATEGORIA

  // OBJ PRODUCTO
  public producto: any = {
    producto_nombre: '',
    producto_descripcion: '',
    producto_precio: 0.0,
    producto_imagen: '',
    producto_estado: true,
    categoria_id: {
      categoria_id:null
    },
  };

  public imagen="https://i.postimg.cc/dQ0PpFDk/imagen.jpg"; // IMAGEN POR DEFECTO

  constructor(private categoriaService:CategoriaService,private productoService:ProductoService, private router:Router,
    private snack:MatSnackBar) {}

  ngOnInit(): void {

    // CARGAR LISTADO CATEGORIAS (DISPONIBLES)
    this.categoriaService.listarCategoriasDisponible().subscribe(
      (dato:any) => {
        this.categoria = dato;
      },(error) => {
        console.log(error);
      }
    )
  }

  // GUARDAR
  guardarProducto(){

    // VALIDACIONES DE DATOS /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

    if(!this.validarCamposVacios(this.producto.producto_nombre)){
      this.snack.open('Ingrese el nombre.','Aceptar',{duration:3000})
      return;
    }
    else if(!this.validarCamposVacios(this.producto.producto_imagen)){
      this.snack.open('Ingrese la imagen.','Aceptar',{duration:3000})
      return;
    }
    else if(!this.validarCamposVacios(this.producto.producto_descripcion) ){
      this.snack.open('Ingrese el detalle.','Aceptar',{duration:3000})
      return;
    }
    else if(this.producto.producto_precio==null || this.producto.producto_precio<=0){
      this.snack.open('Ingrese el precio.','Aceptar',{duration:3000})
      return;
    }
    else if(this.producto.categoria_id.categoria_id==null){
      this.snack.open('Ingrese el categoría.','Aceptar',{duration:3000})
      return;
    }

    // POST | GUARDAR
    this.productoService.agregarProducto(this.producto).subscribe(
      (dato:any) => {

        console.log(dato)

        Swal.fire('Producto agregado','El producto ha sido agregada con éxito','success');

        // RESETEAR OBJ PRODUCTO
        this.producto = {
                    producto_nombre: '',
                    producto_descripcion: '',
                    producto_precio: 0.0,
                    producto_imagen: '',
                    producto_estado: true,
                    categoria_id: {
                      categoria_id:0
                    },
                  };
        
        this.router.navigate(['/app/producto']);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al guardar el producto','error')
      }
    )
  }

  // EVENTO ESCRITURA EN INPUT IMAGEN (para cargar url)
  imageValuechange(text_value: string): void {  
    if(text_value==undefined || text_value==null || text_value.trim()==""){
      this.imagen="https://i.postimg.cc/dQ0PpFDk/imagen.jpg";
    }else{
      this.imagen=text_value;
    }
  }


  // VALIDAR CAMPOS VACIOS
  validarCamposVacios(inputText:any){
    if(inputText==undefined || inputText==null || inputText.trim() == ''){
      return false;
    }else{
      return true;
    }
  }


}
