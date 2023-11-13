package com.tech.servicio;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.tech.model.Rol;
import com.tech.model.Usuario;
import com.tech.repositorio.UsuarioRepositorio;


@Service
@Transactional
public class UsuarioServicio implements UserDetailsService {
	
	@Autowired
	private UsuarioRepositorio repositorio;
	
	public Usuario _buscarPorNombreUsuario(String username) {
		
		try {
			return repositorio.findUserByUsername(username).get();
		}catch(Exception e) {
			return null;
		}
		
	}

	// [GET] : LISTA TODO
	public List<Usuario> buscarTodo(){
		return (List<Usuario>) repositorio.findAll();
	}
	
	// [GET] : BUSCAR POR ID
	public Usuario buscarPorId(Integer id){
		return repositorio.findById(id).get();
	}
	

	// [DELETE] : BORRADO
	public void borrado(Integer id){
				
		repositorio.deleteById(id);
	}
	
	// [POST] : CREAR NUEVO	
	public void crear(Usuario u){
		
		String passwordText = u.getPassword();
		String passwordEcoded = new BCryptPasswordEncoder().encode(passwordText);
		u.setPassword(passwordEcoded);
		
		repositorio.save(u);
	}


	// [PUT] : ACTUALIZAR
    public void actualizar (Integer id, Usuario u) {		

    	Usuario uActual= repositorio.findById(id).get();
    	
    	// SE ACTUALIZA TODO + CONTRASEÑA
		String passwordText = u.getPassword();
		String passwordEcoded = new BCryptPasswordEncoder().encode(passwordText);
		
    	uActual.setUsername(u.getUsername());
    	uActual.setPassword(passwordEcoded);
    	uActual.setNombre(u.getNombre());
    	uActual.setApellido(u.getApellido());
    	uActual.setDni(u.getDni());
    	uActual.setEmail(u.getEmail());
    	uActual.setTelefono(u.getTelefono());
    	uActual.setDireccion(u.getDireccion());
    	uActual.setRoles(u.getRoles());
    	uActual.setEnabled(u.getEnabled());

        repositorio.save(uActual);
    }

    

	// [PUT] : ACTUALIZAR
    public void actualizarNoPassword (Integer id, Usuario u) {		

    	Usuario uActual= repositorio.findById(id).get();
    	
    	// SE ACTUALIZA TODO MENOS LA CONTRASEÑA
    	String passwordEcoded = u.getPassword();
		
    	uActual.setUsername(u.getUsername());
    	uActual.setPassword(passwordEcoded);
    	uActual.setNombre(u.getNombre());
    	uActual.setApellido(u.getApellido());
    	uActual.setDni(u.getDni());
    	uActual.setEmail(u.getEmail());
    	uActual.setTelefono(u.getTelefono());
    	uActual.setDireccion(u.getDireccion());
    	uActual.setRoles(u.getRoles());
    	uActual.setEnabled(u.getEnabled());

        repositorio.save(uActual);
    }

   

    
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Optional<Usuario> usuario = repositorio.findUserByUsername(username);
		
		if(usuario.isEmpty()) {
			System.out.println("# Usuario no encontardo: "+username);
			throw new UsernameNotFoundException("Usuario no encontardo: "+username);
		}
		else if (usuario.get().getEnabled()==false){ // USUARIO NO ACTIVO
			System.out.println("# Usuario se encuentra Desactivado: "+username);
			throw new UsernameNotFoundException("Usuario se encuentra Desactivado: "+username);
		}
		else {
			Usuario userData = repositorio.findById(usuario.get().getUsuarioId()).get();
			List<Rol> roles = (List<Rol>) userData.getRoles();
			Set<GrantedAuthority> ga = new HashSet<>();
			for(Rol rol: roles) {
				ga.add(new SimpleGrantedAuthority(rol.getRolNombre()));
			}
			
			System.out.println("Tamañano de Roles: " + roles.size());
			System.out.println("Tamañano de GrantedAuthority: " +ga.size());

			User springSessionUser = new User(username,userData.getPassword(),ga);
			return springSessionUser;			
		}
		
	}

}
