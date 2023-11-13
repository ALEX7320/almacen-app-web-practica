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

import com.tech.model.Proveedor;
import com.tech.servicio.ProveedorServicio;

@CrossOrigin("*")
@RestController
@RequestMapping("/proveedor")
public class ProveedorRestController {

	@Autowired
	private ProveedorServicio servicio;
	
	// [GET] : LISTA TODO
	@GetMapping
	public ResponseEntity<?> buscarTodo(){
		List<Proveedor> lista = servicio.buscarTodo();
		return new ResponseEntity<>(lista, HttpStatus.OK);		
	}
	
	// [GET] : LISTA TODO SOLO ACTIVOS	
	@GetMapping("/active")
	public ResponseEntity<?> buscarTodoActivo(){
		List<Proveedor> lista = servicio.buscarTodoActivo();
		return new ResponseEntity<>(lista, HttpStatus.OK);		
	}
	
	// [GET] : BUSCAR POR ID
	@GetMapping("/{id}")
	public ResponseEntity<?> buscarPorId(@PathVariable(name="id") Integer id){
		Proveedor proveedor = servicio.buscarPorId(id);
		if(proveedor==null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(proveedor, HttpStatus.OK);		
	}
	
	// [POST] : CREAR NUEVO	
	@PostMapping
	public ResponseEntity<?> crear(@RequestBody Proveedor proveedor){
		servicio.crear(proveedor);
		
		Map<String,String> respuesta = new HashMap<>();
		respuesta.put("codigo","OK");
		respuesta.put("mensaje","Proveedor creado correctamente");
		
		return new ResponseEntity<>(respuesta,HttpStatus.OK);
	}
	
	// [DELETE] : BORRADO
	@DeleteMapping("/{id}")
	public ResponseEntity<?> borrado(@PathVariable(name="id") Integer id){
		servicio.borrado(id);
		
		Map<String,String> respuesta = new HashMap<>();
		respuesta.put("codigo","OK");
		respuesta.put("mensaje","Proveedor borrado correctamente");
		
		return new ResponseEntity<>(respuesta,HttpStatus.OK);
	}
	
	// [PUT] : ACTUALIZAR
	@PutMapping("/{id}")
	public ResponseEntity<?> actualizar(@PathVariable(name="id") Integer id, @RequestBody Proveedor proveedor){
		
		servicio.actualizar(id, proveedor);
		
		Map<String,String> respuesta = new HashMap<>();
		respuesta.put("codigo","OK");
		respuesta.put("mensaje","Proveedor actualizado correctamente");
		
		return new ResponseEntity<>(respuesta,HttpStatus.OK); 
		
	}
	
	
	
}
