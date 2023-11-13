package com.tech.model;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;


@Entity
@Table(name="usuarios")
public class Usuario implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="usuarioId")
    private Integer usuarioId;
    
	@Column(name="username",unique=true)
	@Basic(optional=false) // este campo ES obligatorio
    private String username;
	
	@Column(name="password")
	@Basic(optional=false) // este campo ES obligatorio
    private String password;
	
	@Column(name="nombre")
	@Basic(optional=false) // este campo ES obligatorio
    private String nombre;
	
	@Column(name="apellido")
	@Basic(optional=false) // este campo ES obligatorio
    private String apellido;
	
	@Column(name="email",unique=true)
	@Basic(optional=false) // este campo ES obligatorio
    private String email;
	
	@Column(name="telefono")
	@Basic(optional=false) // este campo ES obligatorio
    private String telefono;
	
	@Column(name="direccion")
	@Basic(optional=false) // este campo ES obligatorio
    private String direccion;
	
	@Column(name="dni",unique=true)
	@Basic(optional=false) // este campo ES obligatorio
    private String dni;
	
	@Column(name="enabled", columnDefinition = "TINYINT")
	@Basic(optional=false) // este campo ES obligatorio
    private Boolean enabled = true;

    
	@ManyToMany
	@JoinTable(name = "usuario_rol", joinColumns = @JoinColumn(name = "usuarioId"),
	inverseJoinColumns = @JoinColumn(name = "rolId"))
	private Collection<Rol> roles;
		
	public Usuario() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Usuario(Integer usuarioId, String username, String password, String nombre, String apellido, String email,
			String telefono, String direccion, String dni, Boolean enabled, Collection<com.tech.model.Rol> roles) {
		super();
		this.usuarioId = usuarioId;
		this.username = username;
		this.password = password;
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.telefono = telefono;
		this.direccion = direccion;
		this.dni = dni;
		this.enabled = enabled;
		this.roles = roles;
	}



	public Integer getUsuarioId() {
		return usuarioId;
	}

	public void setUsuarioId(Integer usuarioId) {
		this.usuarioId = usuarioId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getDni() {
		return dni;
	}

	public void setDni(String dni) {
		this.dni = dni;
	}

	public Boolean getEnabled() {
		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	public Collection<Rol> getRoles() {
		return roles;
	}

	public void setRoles(Collection<Rol> roles) {
		this.roles = roles;
	}

}
