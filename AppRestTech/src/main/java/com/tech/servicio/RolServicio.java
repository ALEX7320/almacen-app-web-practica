package com.tech.servicio;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tech.model.Rol;
import com.tech.repositorio.RolRepositorio;

@Service
@Transactional
public class RolServicio {
	
	@Autowired
	private RolRepositorio repositorio;
	
	// [-] : CREAR NUEVO	
	public void crear(Rol r){
		repositorio.save(r);
	}
	
	
	// [GET] : LISTA TODO
	public List<Rol> buscarTodo(){
		return (List<Rol>) repositorio.findAll();
	}



}
