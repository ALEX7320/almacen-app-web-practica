package com.tech.security.jwt.authentication;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.tech.security.jwt.JwtTokenUtil;
import com.tech.security.jwt.authentication.exceptions.AuthenticationExpiredTokenException;
import com.tech.security.jwt.authentication.exceptions.AuthenticationNoTokenException;
import com.tech.servicio.UsuarioServicio;


@Component
public class JwtRequestFilter extends OncePerRequestFilter{

	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private UsuarioServicio usuarioDetailService;
	
	
	// URI ACCESO PUBLICO
	
	private final String uriAuthenticatePOST = "/authenticate"; // POST | /authenticate/**
	private final String uriListRolGET = "/list-rol"; // GET | /list-rol
	private final String uriTokenEstadoGET = "/token-estado"; // GET | /token-estado


    
	public JwtRequestFilter() {
		// TODO Auto-generated constructor stub
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("FILTRO JWT ACTIVADO");
		String uri = request.getRequestURI();
		String metodo = request.getMethod(); // POST | GET | PUT

		System.out.println("URI: "+ uri);
		
		if(
			(uri.endsWith(uriTokenEstadoGET) && metodo.equals("GET")) ||
			(uri.endsWith(uriListRolGET) && metodo.equals("GET")) ||
			(uri.endsWith(uriAuthenticatePOST) && metodo.equals("POST"))
		) {
			
			System.out.println("Uri publica..filtro no acciona!!");
			
		} else { //if(!uri.contains(uriAgrear)&&!uri.contains(uriAuthenticar)) {
			final String authHeader = request.getHeader("Authorization");
			System.out.println("request authorization header: "+ authHeader);

			String subject = "";
			String jwtToken = "";
			
			if(authHeader!=null && authHeader.startsWith("Bearer ")) {
				
				jwtToken = authHeader.substring(7); // 7 digitos → "Bearer "
				subject = jwtTokenUtil.getUsernameFromToken(jwtToken);
				System.out.println("Token fue generado para: "+subject);
				
				
				
				if(subject!=null && SecurityContextHolder.getContext().getAuthentication()==null) {
					UserDetails userDetails = usuarioDetailService.loadUserByUsername(subject); 

					if(jwtTokenUtil.validateToken(jwtToken, userDetails)) {
						UsernamePasswordAuthenticationToken uptak = new UsernamePasswordAuthenticationToken(
								userDetails.getUsername(),userDetails.getPassword(),
								userDetails.getAuthorities()
								);
						uptak.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
						SecurityContextHolder.getContext().setAuthentication(uptak); 
						
					}else {
						System.out.println("Token expirado!!");
						throw new AuthenticationExpiredTokenException("Token jwt no presente");

					}
				}
			}else {
				throw new AuthenticationNoTokenException("Token jwt no presente");
			}
		}
		
		filterChain.doFilter(request, response);

	}

}
