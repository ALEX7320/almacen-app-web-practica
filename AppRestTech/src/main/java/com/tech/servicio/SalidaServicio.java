package com.tech.servicio;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tech.model.Salida;
import com.tech.repositorio.SalidaRepositorio;
import com.tech.utiles.Utilitario;

@Service
@Transactional
public class SalidaServicio {
	
	@Autowired
	private SalidaRepositorio repositorio;
	
	
	// [GET] : LISTA TODO
	public List<Salida> buscarTodo(){
		return (List<Salida>) repositorio.findAll();
	}
	
	// [GET] : BUSCAR POR ID
	public Salida buscarPorId(int id){
		return repositorio.findById(id).get();
	}
	
	// [GET] : BUSCAR POR ID PRODUCTO
	public List<Salida> buscarPorIdProducto(int id){
		return repositorio.findAllByProductoId(id);
	}
	
	// [POST] : CREAR NUEVO	
	public void crear(Salida s){
		
		s.setSalida_fecha(new Utilitario().masUnDia(s.getSalida_fecha()));
		repositorio.save(s);
	}
	
	// [DELETE] : BORRADO
	public void borrado(int id){
		repositorio.deleteById(id);
	}  
	

	// [PUT] : ACTUALIZAR
    public void actualizar (Integer id, Salida i) {		

    	Salida sActual= repositorio.findById(id).get();
    	
    	sActual.setSalida_cantidad(i.getSalida_cantidad());
    	sActual.setSalida_detalle(i.getSalida_detalle());
    	sActual.setSalida_fecha(new Utilitario().masUnDia(i.getSalida_fecha()));
    	sActual.setProducto_id(i.getProducto_id());
    
       repositorio.save(sActual);
       
	}
	
	

}
