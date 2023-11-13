package com.tech.security.jwt.authentication;

import java.io.IOException;
import java.io.Serializable;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

@Component
public class JwtAuthenticationEntryPoint implements Serializable, AuthenticationEntryPoint {


	private static final long serialVersionUID = 1L;


	
	public JwtAuthenticationEntryPoint() {
		// TODO Auto-generated constructor stub
	}



	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException authException) throws IOException, ServletException {
		// TODO Auto-generated method stub
		System.out.println("Error en la Clase: JwtAuthenticationEntryPoint");
		if(authException!=null) {
			System.out.println("Excepcion:");
			authException.printStackTrace();
		}
		response.sendError(HttpServletResponse.SC_UNAUTHORIZED,"UNAUTHORIZED!");
		


	}

}
