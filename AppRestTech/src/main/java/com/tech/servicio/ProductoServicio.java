package com.tech.servicio;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tech.model.Producto;
import com.tech.repositorio.ProductoRepositorio;

@Service
@Transactional
public class ProductoServicio {

	@Autowired
	private ProductoRepositorio repositorio; 
	
	// [GET] : LISTA TODO
	public List<Producto> buscarTodo(){
		return (List<Producto>) repositorio.findAll();
	}
	
	// [GET] : LISTA TODO SOLO ACTIVOS
	public List<Producto> buscarTodoActivo(){
		return (List<Producto>) repositorio.findAllActivos();
	}
	
	// [GET] : BUSCAR POR ID
	public Producto buscarPorId(Integer id){
		return repositorio.findById(id).get();
	}
	
	// [POST] : CREAR NUEVO	
	public Producto crear(Producto p){
		repositorio.save(p);
		return p;
	}
	
	// [DELETE] : BORRADO LOGICO
	public void borradoLogico(Integer id){
		Producto p = (Producto) repositorio.findById(id).get();
		p.setProducto_estado(false);
		repositorio.save(p);
	}
	
	// [PUT] : ACTUALIZAR
    public void actualizar (Integer id, Producto p) {		

    	Producto pActual= repositorio.findById(id).get();

    	pActual.setProducto_nombre(p.getProducto_nombre());
    	pActual.setProducto_descripcion(p.getProducto_descripcion());
    	pActual.setProducto_precio(p.getProducto_precio());
    	pActual.setProducto_imagen(p.getProducto_imagen());
    	pActual.setProducto_estado(p.getProducto_estado());
    	pActual.setCategoria_id(p.getCategoria_id());
    	
       repositorio.save(pActual);
    }

	
	
	
	
	
}
