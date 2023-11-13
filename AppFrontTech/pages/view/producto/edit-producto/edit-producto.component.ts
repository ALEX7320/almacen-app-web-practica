import { Component, OnInit } from '@angular/core';
import  Swal  from 'sweetalert2';
import { CategoriaService } from '../../../../services/categoria.service';
import { ProductoService } from '../../../../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  public producto_id = 0; // ID PRODUCTO
  public categoria:any=[]; // LISTADO OBJETO CATEGORIA

  // OBJETO PRODUCTO
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

  public imagen=""; // STR IMAGEN

  constructor(private route:ActivatedRoute, private productoService:ProductoService, private categoriaService:CategoriaService,
     private router:Router,private snack:MatSnackBar) { }

  ngOnInit(): void {

    // OBTENER ID INGRESADO EN LA URL producto/{id}
    this.producto_id = this.route.snapshot.params['producto_id'];

    // OBTENER PRODUCTO
    this.productoService.obtenerProducto(this.producto_id).subscribe(
      (data) => {
        this.producto = data;
        this.imagen=this.producto.producto_imagen;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar datos del producto.','error');
      }
    )

    // CARGAR LISTADO DE CATEGORIAS
    this.categoriaService.listarCategoriasDisponible().subscribe(
      (data:any) => {

        this.categoria = data;

        // SI LA CATEGORIA ESTA DESACTIVADA, HAY QUE AGREGAR (PARA EDITAR) 
        if(this.producto.categoria_id.categoria_estado==false){
          this.categoria.push(this.producto.categoria_id)
        }

      },
      (error) => {
        console.log(error)
      }
    )
    
  }


  // ACTUALIZAR
  public actualizarDatos(){

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


    // PUT | ACTUALIZAR DATOS
    this.productoService.editarProducto(this.producto).subscribe(
      (data) => {
        Swal.fire('Producto actualizado','El producto ha sido actualizado con éxito','success').then(
          (e) => {
            this.router.navigate(['/app/producto']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','No se ha podido actualizar el producto','error');
        console.log(error);
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
