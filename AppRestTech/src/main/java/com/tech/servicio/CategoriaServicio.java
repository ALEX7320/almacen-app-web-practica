package com.tech.servicio;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tech.model.Categoria;
import com.tech.repositorio.CategoriaRepositorio;

@Service
@Transactional
public class CategoriaServicio {
	
	@Autowired
	private CategoriaRepositorio repositorio;
	
	
	// [GET] : LISTA TODO
	public List<Categoria> buscarTodo(){
		return (List<Categoria>) repositorio.findAll();
	}
	
	// [GET] : LISTA TODO SOLO ACTIVOS
	public List<Categoria> buscarTodoActivo(){
		return (List<Categoria>) repositorio.findAllActivos();
	}
	
	
	// [GET] : BUSCAR POR ID
	public Categoria buscarPorId(Integer id){
		return repositorio.findById(id).get();
	}
	
	// [POST] : CREAR NUEVO	
	public void crear(Categoria c){
		repositorio.save(c);
	}
	
	// [DELETE] : BORRADO
	public void borrado(Integer id){
		repositorio.deleteById(id);
	}
	
	// [PUT] : ACTUALIZAR
    public Categoria actualizar (Integer id, Categoria c) {		

    	Categoria cActual= repositorio.findById(id).get();
   
    	cActual.setCategoria_nombre(c.getCategoria_nombre());
    	cActual.setCategoria_estado(c.getCategoria_estado());

       repositorio.save(cActual);
       
       return cActual;
	}

}
