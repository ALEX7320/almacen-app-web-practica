package com.tech.controlador.rest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.tech.model.Ingreso;
import com.tech.servicio.IngresoServicio;

@CrossOrigin("*")
@RestController
@RequestMapping("/ingreso")
public class IngresoRestController {
	
	@Autowired
	private IngresoServicio servicio;
	
	// [GET] :  BUSCAR TODO
	@GetMapping
	public ResponseEntity<?> buscarTodo(){
		List<Ingreso> lista = servicio.buscarTodo();
		return new ResponseEntity<>(lista, HttpStatus.OK);		
	}
	
	// [GET] : BUSCAR POR ID
	@GetMapping("/{id}")
	public ResponseEntity<?> buscarPorId(@PathVariable(name="id") Integer id){
		Ingreso ingreso = servicio.buscarPorId(id);
		if(ingreso==null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}	
		return new ResponseEntity<>(ingreso, HttpStatus.OK);		
	}
	
	
	// [GET] : BUSCAR POR ID PRODUCTO
	@GetMapping("/producto/{id}")
	public ResponseEntity<?> buscarPorIdProducto(@PathVariable(name="id") Integer id){
		List<Ingreso> lista = servicio.buscarPorIdProducto(id);
		return new ResponseEntity<>(lista, HttpStatus.OK);		
	}
	
	
	// [POST] : CREAR NUEVO	
	@PostMapping
	public ResponseEntity<Object> crear(@RequestBody Ingreso ingreso){
		
		servicio.crear(ingreso);
		
		Map<String,String> respuesta = new HashMap<>();
		respuesta.put("codigo","OK");
		respuesta.put("mensaje","Ingreso creado correctamente");
		
		return new ResponseEntity<>(respuesta,HttpStatus.OK);		
	}
	
	// [DELETE] : BORRADO
	@DeleteMapping(value ="/{id}")
	public ResponseEntity<Object> borrado(@PathVariable(name="id") Integer id){
		servicio.borrado(id);
	
		Map<String,String> respuesta = new HashMap<>();
		respuesta.put("codigo","OK");
		respuesta.put("mensaje","Ingreso borrado correctamente");
		
		return new ResponseEntity<>(respuesta,HttpStatus.OK);
	}
	
	// [PUT] : ACTUALIZAR
	@PutMapping("/{id}")
	public ResponseEntity<?> actualizar(@PathVariable(name="id") Integer id, @RequestBody Ingreso ingreso){
		
		servicio.actualizar(id, ingreso);
		
		Map<String,String> respuesta = new HashMap<>();
		respuesta.put("codigo","OK");
		respuesta.put("mensaje","Ingreso actualizado correctamente");
		
		return new ResponseEntity<>(respuesta,HttpStatus.OK); 
		
	}
	

	
	
}
