package com.tech.security.jwt.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;

import com.tech.model.Rol;
import com.tech.model.Usuario;
import com.tech.security.jwt.JwtRequest;
import com.tech.security.jwt.JwtResponse;
import com.tech.security.jwt.JwtTokenUtil;
import com.tech.servicio.RolServicio;
import com.tech.servicio.UsuarioServicio;


@RestController 
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class JwtAuthenticationContoller {
	
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private UsuarioServicio usuarioDetailService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UsuarioServicio usuarioServicio;
	
	@Autowired
	private RolServicio rolServicio;
	

	public JwtAuthenticationContoller() {

	}
	
	
	// [GET] : LISTA TODO
	@GetMapping("/list-rol")
	public ResponseEntity<?> buscarTodo(){
		List<Rol> lista = rolServicio.buscarTodo();
		return new ResponseEntity<>(lista, HttpStatus.OK);		
	}
	
	@GetMapping("/actual-usuario")
	public Usuario obtenerUsuarioActual(Principal principal){
		
		/*ambos metodos son funcionales*/
		//String nombreUsuario = SecurityContextHolder.getContext().getAuthentication().getName();
		String nombreUsuario = principal.getName();
		
		Usuario user = usuarioServicio._buscarPorNombreUsuario(nombreUsuario);
		
		return user;
		
	}
	
	@GetMapping("/token-estado")
	public ResponseEntity<?> validarEstadoToken(HttpServletRequest request){

		Map<String,Boolean> respuesta = new HashMap<>();
		
		Boolean estadoToken = false;
		
		try {
		
			final String authHeader = request.getHeader("Authorization");
			System.out.println("request authorization header: "+ authHeader);
	
			String subject = "";
			String jwtToken = "";
			
			if(authHeader!=null && authHeader.startsWith("Bearer ")) {
	
				jwtToken = authHeader.substring(7); // 7 digitos → "Bearer "
				subject = jwtTokenUtil.getUsernameFromToken(jwtToken);
				
				UserDetails userDetails = usuarioDetailService.loadUserByUsername(subject); 
				estadoToken = jwtTokenUtil.validateToken(jwtToken, userDetails); // true or false	
			}
			
		}catch(Exception e) {
			// false
		}
		
		respuesta.put("estado",estadoToken);
		System.out.println("Estado del [Token]: "+estadoToken);
		

		return new ResponseEntity<>(respuesta,HttpStatus.OK);
		
	}
	
	
	
	@PostMapping("/authenticate")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest request){
				
		this.authenticate(request.getUsername(),request.getPassword());
		final UserDetails userDetails = this.usuarioDetailService.loadUserByUsername(request.getUsername());
		final String jwtToken = this.jwtTokenUtil.generateToken(userDetails);	
		
		return new ResponseEntity<>(new JwtResponse(jwtToken),HttpStatus.OK); 
		
	}
	
	private void authenticate(String username, String password) {
		this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password, null));
		
	}
	


}
