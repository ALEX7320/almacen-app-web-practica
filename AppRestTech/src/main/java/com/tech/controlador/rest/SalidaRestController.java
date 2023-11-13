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

import com.tech.model.Salida;
import com.tech.servicio.SalidaServicio;

@CrossOrigin("*")
@RestController
@RequestMapping("/salida")
public class SalidaRestController {

	
	@Autowired
	private SalidaServicio servicio;
	
	// [GET]
	@GetMapping
	public ResponseEntity<?> buscarTodo(){
		List<Salida> lista = servicio.buscarTodo();
		return new ResponseEntity<>(lista, HttpStatus.OK);		
	}
	
	// [GET] : BUSCAR POR ID
	@GetMapping("/{id}")
	public ResponseEntity<?> buscarPorId(@PathVariable(name="id") Integer id){
		Salida salida = servicio.buscarPorId(id);
		if(salida==null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(salida, HttpStatus.OK);		
	}
	
	// [GET] : BUSCAR POR ID PRODUCTO
	@GetMapping("/producto/{id}")
	public ResponseEntity<?> buscarPorIdProducto(@PathVariable(name="id") Integer id){
		List<Salida> lista = servicio.buscarPorIdProducto(id);
		return new ResponseEntity<>(lista, HttpStatus.OK);		
	}
	
	
	// [POST] : CREAR NUEVO	
	@PostMapping
	public ResponseEntity<?> crear(@RequestBody Salida salida){
		servicio.crear(salida);
		
		Map<String,String> respuesta = new HashMap<>();
		respuesta.put("codigo","OK");
		respuesta.put("mensaje","Salida creado correctamente");
		
		return new ResponseEntity<>(respuesta,HttpStatus.OK);
	
	}
	
	// [DELETE] : BORRADO
	@DeleteMapping("/{id}")
	public ResponseEntity<?> borrado(@PathVariable(name="id") Integer id){
		servicio.borrado(id);

		Map<String,String> respuesta = new HashMap<>();
		respuesta.put("codigo","OK");
		respuesta.put("mensaje","Salida borrado correctamente");
		
		return new ResponseEntity<>(respuesta,HttpStatus.OK);
	}	
	
	// [PUT] : ACTUALIZAR
	@PutMapping("/{id}")
	public ResponseEntity<?> actualizar(@PathVariable(name="id") Integer id, @RequestBody Salida salida){
		
		servicio.actualizar(id, salida);
		
		Map<String,String> respuesta = new HashMap<>();
		respuesta.put("codigo","OK");
		respuesta.put("mensaje","Salida actualizado correctamente");
		
		return new ResponseEntity<>(respuesta,HttpStatus.OK); 
		
	}
	
	
}
