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

import com.tech.model.Producto;
import com.tech.servicio.ProductoServicio;


@RestController
@RequestMapping("/producto")
@CrossOrigin("*")
public class ProductoRestController {

	@Autowired
	private ProductoServicio servicio;
	
	// [GET] : LISTA TODO SOLO ACTIVOS	
	@GetMapping
	public ResponseEntity<?> buscarTodoActivo(){
		List<Producto> lista = servicio.buscarTodoActivo();
		return new ResponseEntity<>(lista, HttpStatus.OK);		
	}
	
	// [GET] : BUSCAR POR ID
	@GetMapping("/{id}")
	public ResponseEntity<?> buscarPorId(@PathVariable(name="id") Integer id){
		Producto producto = servicio.buscarPorId(id);
		if(producto==null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}	
		return new ResponseEntity<>(producto, HttpStatus.OK);		
	}

	
	// [POST] : CREAR NUEVO	
	@PostMapping
	public ResponseEntity<?> crear(@RequestBody Producto producto){
		servicio.crear(producto);
		
		Map<String,String> respuesta = new HashMap<>();
		respuesta.put("codigo","OK");
		respuesta.put("mensaje","Producto creado correctamente");
		
		return new ResponseEntity<>(respuesta,HttpStatus.OK);
	}
	
	// [DELETE] : BORRADO LOGICO
	@DeleteMapping("/{id}")
	public ResponseEntity<?> borradoLogico(@PathVariable(name="id") Integer id){
		servicio.borradoLogico(id);
		
		Map<String,String> respuesta = new HashMap<>();
		respuesta.put("codigo","OK");
		respuesta.put("mensaje","Producto borrado correctamente");
		
		return new ResponseEntity<>(respuesta,HttpStatus.OK);
	}
	
	// [PUT] : ACTUALIZAR
	@PutMapping("/{id}")
	public ResponseEntity<?> actualizar(@PathVariable(name="id") Integer id, @RequestBody Producto producto){
		
		servicio.actualizar(id, producto);
		
		Map<String,String> respuesta = new HashMap<>();
		respuesta.put("codigo","OK");
		respuesta.put("mensaje","Producto actualizado correctamente");
		
		return new ResponseEntity<>(respuesta,HttpStatus.OK); 
		
	}
	
	
	
	
}
