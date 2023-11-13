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

import com.tech.model.Usuario;
import com.tech.servicio.UsuarioServicio;

@CrossOrigin("*")
@RestController
@RequestMapping("/usuario")
public class UsuarioRestController {

	@Autowired
	private UsuarioServicio servicio;
		
	// [GET] : LISTA TODO
	@GetMapping
	public ResponseEntity<?> buscarTodo(){
		List<Usuario> lista = servicio.buscarTodo();
		return new ResponseEntity<>(lista, HttpStatus.OK);		
	}
	
	// [GET] : BUSCAR POR ID
	@GetMapping("/{id}")
	public ResponseEntity<?> buscarPorId(@PathVariable(name="id") Integer id){
		Usuario usuario = servicio.buscarPorId(id);
		if(usuario==null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(usuario, HttpStatus.OK);		
	}
	
	
	// [POST] : CREAR NUEVO	
	@PostMapping
	public ResponseEntity<?> crear(@RequestBody Usuario usuario){
		servicio.crear(usuario);
		
		Map<String,String> respuesta = new HashMap<>();
		respuesta.put("codigo","OK");
		respuesta.put("mensaje","Usuario creado correctamente");
		
		return new ResponseEntity<>(respuesta,HttpStatus.OK);
	}
	
	// [DELETE] : BORRADO
	@DeleteMapping("/{id}")
	public ResponseEntity<?> borrado(@PathVariable(name="id") Integer id){
		servicio.borrado(id);

		Map<String,String> respuesta = new HashMap<>();
		respuesta.put("codigo","OK");
		respuesta.put("mensaje","Usuario borrado correctamente");
		
		return new ResponseEntity<>(respuesta,HttpStatus.OK);
	}	
	
	// [PUT] : ACTUALIZAR
	@PutMapping("/{id}")
	public ResponseEntity<Object> actualizar(@PathVariable(name="id") Integer id, @RequestBody Usuario usuario){
		servicio.actualizar(id, usuario);
		
		Map<String,String> respuesta = new HashMap<>();
		respuesta.put("codigo","OK");
		respuesta.put("mensaje","Usuario actualizado correctamente");
		
		return new ResponseEntity<>(respuesta,HttpStatus.OK); 
	}
	
	// [PUT] : ACTUALIZAR
	@PutMapping("/no-password/{id}")
	public ResponseEntity<Object> actualizarNoPassword(@PathVariable(name="id") Integer id, @RequestBody Usuario usuario){
		servicio.actualizarNoPassword(id, usuario);
		
		Map<String,String> respuesta = new HashMap<>();
		respuesta.put("codigo","OK");
		respuesta.put("mensaje","Usuario actualizado correctamente (menos la contraseña)");
		
		return new ResponseEntity<>(respuesta,HttpStatus.OK); 
	}
	

}
