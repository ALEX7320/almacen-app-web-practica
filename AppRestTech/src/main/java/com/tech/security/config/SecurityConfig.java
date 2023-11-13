package com.tech.security.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.tech.security.jwt.authentication.JwtAuthenticationEntryPoint;
import com.tech.security.jwt.authentication.JwtRequestFilter;


@SuppressWarnings("deprecation")
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private UserDetailsService detail;
	
	@Autowired
	private JwtAuthenticationEntryPoint jwtAuthEntryPoint;
	
	@Autowired
	private JwtRequestFilter filter;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		// VERIFICAR LOS PERMISOS ASIGNADOS
		auth.userDetailsService(detail);
	
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		/*
			-- USUARIO CREADO POR DEFECTO --
		 	Usuario: admin
		 	Contraseña: admin
		 	Rol: ADMIN
		*/
		
		String R_ADMIN = "ADMIN";
		String R_ALMAC = "ALMACENERO"; 

		http.authorizeRequests()

		    // CATEGORIA
		    .antMatchers(HttpMethod.GET, "/categoria").hasAnyAuthority(R_ADMIN,R_ALMAC)
		    .antMatchers(HttpMethod.GET, "/categoria/active").hasAnyAuthority(R_ADMIN,R_ALMAC)
		    .antMatchers(HttpMethod.GET, "/categoria/**").hasAnyAuthority(R_ADMIN,R_ALMAC)
		    .antMatchers(HttpMethod.POST, "/categoria").hasAnyAuthority(R_ADMIN)	
		    .antMatchers(HttpMethod.PUT, "/categoria/**").hasAnyAuthority(R_ADMIN)
		    .antMatchers(HttpMethod.DELETE, "/categoria/**").hasAnyAuthority(R_ADMIN)
		    
		    
		    // PROVEEDOR
		    .antMatchers(HttpMethod.GET, "/proveedor").hasAnyAuthority(R_ADMIN,R_ALMAC)
		    .antMatchers(HttpMethod.GET, "/proveedor/active").hasAnyAuthority(R_ADMIN,R_ALMAC)
		    .antMatchers(HttpMethod.GET, "/proveedor/**").hasAnyAuthority(R_ADMIN,R_ALMAC)
		    .antMatchers(HttpMethod.POST, "/proveedor").hasAnyAuthority(R_ADMIN)	
		    .antMatchers(HttpMethod.PUT, "/proveedor/**").hasAnyAuthority(R_ADMIN)
		    .antMatchers(HttpMethod.DELETE, "/proveedor/**").hasAnyAuthority(R_ADMIN)
		 
		    // INGRESO
		    .antMatchers(HttpMethod.GET, "/ingreso").hasAnyAuthority(R_ADMIN,R_ALMAC)
		    .antMatchers(HttpMethod.GET, "/ingreso/**").hasAnyAuthority(R_ADMIN,R_ALMAC)
		    .antMatchers(HttpMethod.POST, "/ingreso").hasAnyAuthority(R_ADMIN,R_ALMAC)	
		    .antMatchers(HttpMethod.PUT, "/ingreso/**").hasAnyAuthority(R_ADMIN,R_ALMAC)
		    .antMatchers(HttpMethod.DELETE, "/ingreso/**").hasAnyAuthority(R_ADMIN,R_ALMAC)
		    .antMatchers(HttpMethod.GET, "/ingreso/producto/**").hasAnyAuthority(R_ADMIN,R_ALMAC)

		    // SALIDA
		    .antMatchers(HttpMethod.GET, "/salida").hasAnyAuthority(R_ADMIN,R_ALMAC)	
		    .antMatchers(HttpMethod.GET, "/salida/**").hasAnyAuthority(R_ADMIN,R_ALMAC)	
		    .antMatchers(HttpMethod.POST, "/salida").hasAnyAuthority(R_ADMIN,R_ALMAC)	
		    .antMatchers(HttpMethod.PUT, "/salida/**").hasAnyAuthority(R_ADMIN,R_ALMAC)
		    .antMatchers(HttpMethod.DELETE, "/salida/**").hasAnyAuthority(R_ADMIN,R_ALMAC)
		    .antMatchers(HttpMethod.GET, "/salida/producto/**").hasAnyAuthority(R_ADMIN,R_ALMAC)	    
		    		    
		    // PRODUCTO
		    .antMatchers(HttpMethod.GET, "/producto").hasAnyAuthority(R_ADMIN,R_ALMAC)
		    .antMatchers(HttpMethod.GET, "/producto/**").hasAnyAuthority(R_ADMIN,R_ALMAC)	
		    .antMatchers(HttpMethod.POST, "/producto").hasAnyAuthority(R_ADMIN)	
		    .antMatchers(HttpMethod.PUT, "/producto/**").hasAnyAuthority(R_ADMIN,R_ALMAC)
		    .antMatchers(HttpMethod.DELETE, "/producto/**").hasAnyAuthority(R_ADMIN)
		    
		    // USUARIO
		    .antMatchers(HttpMethod.GET, "/usuario").hasAnyAuthority(R_ADMIN)	
		    .antMatchers(HttpMethod.GET, "/usuario/**").hasAnyAuthority(R_ADMIN)
		    .antMatchers(HttpMethod.POST, "/usuario").hasAnyAuthority(R_ADMIN)
		    .antMatchers(HttpMethod.PUT, "/usuario/**").hasAnyAuthority(R_ADMIN)
		    .antMatchers(HttpMethod.PUT, "/usuario/no-password/**").hasAnyAuthority(R_ADMIN)
		    .antMatchers(HttpMethod.DELETE, "/usuario/**").hasAnyAuthority(R_ADMIN)
		    
		    // VALIDACIONES
		    .antMatchers(HttpMethod.POST, "/authenticate").permitAll()
		    .antMatchers(HttpMethod.GET, "/list-rol").permitAll()
		    .antMatchers(HttpMethod.GET, "/actual-usuario").hasAnyAuthority(R_ADMIN,R_ALMAC)	
		    .antMatchers(HttpMethod.GET, "/token-estado").permitAll()


	    	.and()
		    .exceptionHandling().authenticationEntryPoint(jwtAuthEntryPoint).and()
		    .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
		    .addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);//AUTENTICACION TOKEN
		    		    
		http.authorizeRequests().and().httpBasic();
		http.authorizeRequests().and().csrf().disable();
		
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		// TODO Auto-generated method stub
		return super.authenticationManagerBean();
	}
	
	

}
