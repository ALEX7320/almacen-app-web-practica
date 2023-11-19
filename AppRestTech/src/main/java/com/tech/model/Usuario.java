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

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
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
		

}
