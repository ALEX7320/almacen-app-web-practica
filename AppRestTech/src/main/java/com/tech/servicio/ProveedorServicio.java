package com.tech.servicio;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tech.model.Proveedor;
import com.tech.repositorio.ProveedorRepositorio;

@Service
@Transactional
public class ProveedorServicio {
	
	@Autowired
	private ProveedorRepositorio repositorio;
	
	// [GET] : LISTA TODO
	public List<Proveedor> buscarTodo(){
		return (List<Proveedor>) repositorio.findAll();
	} 
	
	// [GET] : LISTA TODO SOLO ACTIVOS
	public List<Proveedor> buscarTodoActivo(){
		return (List<Proveedor>) repositorio.findAllActivos();
	}

	// [GET] : BUSCAR POR ID
	public Proveedor buscarPorId(int id){
		return repositorio.findById(id).get();
	}
	
	// [DELETE] : BORRADO
	public void borrado(Integer id){
		repositorio.deleteById(id);
	}
	
	// [POST] : CREAR NUEVO	
	public void crear(Proveedor p){
		repositorio.save(p);
	}
	
	// [PUT] : ACTUALIZAR
    public void actualizar (Integer id, Proveedor p) {		

    	Proveedor pActual= repositorio.findById(id).get();
    	pActual.setProveedor_nombre(p.getProveedor_nombre());
    	pActual.setProveedor_estado(p.getProveedor_estado());
    	
       repositorio.save(pActual);
  	}

    
	
}
