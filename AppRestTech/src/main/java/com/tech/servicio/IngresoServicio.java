package com.tech.servicio;


import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tech.model.Ingreso;
import com.tech.repositorio.IngresoRepositorio;
import com.tech.utiles.Utilitario;

@Service
@Transactional
public class IngresoServicio {

	@Autowired
	private IngresoRepositorio repositorio;
	
	// [GET] : LISTA TODO
	public List<Ingreso> buscarTodo(){
		return (List<Ingreso>) repositorio.findAll();
	}
	
	// [GET] : BUSCAR POR ID
	public Ingreso buscarPorId(int id){
		return repositorio.findById(id).get();
	}
	
	// [GET] : BUSCAR POR ID PRODUCTO
	public List<Ingreso> buscarPorIdProducto(int id){
		return repositorio.findAllByProductoId(id);
	}
	
	
	// [POST] : CREAR NUEVO	
	public void crear(Ingreso i){     
		i.setIngreso_fecha(new Utilitario().masUnDia(i.getIngreso_fecha()));
		repositorio.save(i);
	}
	
	// [DELETE] : BORRADO
	public void borrado(int id){
		repositorio.deleteById(id);
	}  

	
	// [PUT] : ACTUALIZAR
    public void actualizar (Integer id, Ingreso i) {		

    	Ingreso iActual= repositorio.findById(id).get();
    	
    	iActual.setIngreso_cantidad(i.getIngreso_cantidad());
    	iActual.setIngreso_detalle(i.getIngreso_detalle());
    	iActual.setIngreso_fecha(new Utilitario().masUnDia(i.getIngreso_fecha()));
    	iActual.setProducto_id(i.getProducto_id());
    	iActual.setProveedor_id(i.getProveedor_id());

       repositorio.save(iActual);
       
	}


	
}
