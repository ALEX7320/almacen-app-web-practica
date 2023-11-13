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

import com.tech.model.Categoria;
import com.tech.servicio.CategoriaServicio;

@CrossOrigin("*")
@RestController
@RequestMapping("/categoria")
public class CategoriaRestController {

	@Autowired
	private CategoriaServicio servicio;
		
	// [GET] : LISTA TODO
	@GetMapping
	public ResponseEntity<?> buscarTodo(){
		List<Categoria> lista = servicio.buscarTodo();
		return new ResponseEntity<>(lista, HttpStatus.OK);		
	}
	
	// [GET] : LISTA TODO SOLO ACTIVOS	
	@GetMapping("/active")
	public ResponseEntity<?> buscarTodoActivo(){
		List<Categoria> lista = servicio.buscarTodoActivo();
		return new ResponseEntity<>(lista, HttpStatus.OK);		
	}

	// [GET] : BUSCAR POR ID 
	@GetMapping("/{id}")
	public ResponseEntity<?> buscarPorId(@PathVariable(name="id") Integer id){
		Categoria categoria = servicio.buscarPorId(id);
		if(categoria==null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(categoria, HttpStatus.OK);		
	}
	
	// [POST] : CREAR NUEVO	
	@PostMapping
	public ResponseEntity<?> crear(@RequestBody Categoria categoria){
		servicio.crear(categoria);
		
		Map<String,String> respuesta = new HashMap<>();
		respuesta.put("codigo","OK");
		respuesta.put("mensaje","Categoria creado correctamente");
		
		return new ResponseEntity<>(respuesta,HttpStatus.OK);
	}
	
	
	// [DELETE] : BORRADO
	@DeleteMapping("/{id}")
	public ResponseEntity<?> borrado(@PathVariable(name="id") Integer id){
		servicio.borrado(id);
		
		Map<String,String> respuesta = new HashMap<>();
		respuesta.put("codigo","OK");
		respuesta.put("mensaje","Categoria borrado correctamente");
		
		return new ResponseEntity<>(respuesta,HttpStatus.OK);
	}
	
	// [PUT] : ACTUALIZAR
	@PutMapping("/{id}")
	public ResponseEntity<?> actualizar(@PathVariable(name="id") Integer id, @RequestBody Categoria categoria){
		
		servicio.actualizar(id, categoria);
		
		Map<String,String> respuesta = new HashMap<>();
		respuesta.put("codigo","OK");
		respuesta.put("mensaje","Categoria actualizado correctamente");
		
		return new ResponseEntity<>(respuesta,HttpStatus.OK); 
		
	}
	
	
}
