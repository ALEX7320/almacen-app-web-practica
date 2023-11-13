package com.tech.model;


import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="Categoria")
public class Categoria implements Serializable{
	

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Basic(optional=false) // este campo ES obligatorio
	@Column(name="categoria_id")
	private Integer categoria_id;
	
	@Column(name="categoria_nombre")
	@Basic(optional=false) // este campo ES obligatorio
	private String categoria_nombre;

	@Column(name="categoria_estado", columnDefinition = "TINYINT")
	private Boolean categoria_estado=true;
	
	public Categoria() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Categoria(Integer categoria_id, String categoria_nombre, Boolean categoria_estado) {
		super();
		this.categoria_id = categoria_id;
		this.categoria_nombre = categoria_nombre;
		this.categoria_estado = categoria_estado;
	}

	public Boolean getCategoria_estado() {
		return categoria_estado;
	}

	public void setCategoria_estado(Boolean categoria_estado) {
		this.categoria_estado = categoria_estado;
	}

	public Integer getCategoria_id() {
		return categoria_id;
	}

	public void setCategoria_id(Integer categoria_id) {
		this.categoria_id = categoria_id;
	}

	public String getCategoria_nombre() {
		return categoria_nombre;
	}

	public void setCategoria_nombre(String categoria_nombre) {
		this.categoria_nombre = categoria_nombre;
	}
	
	

	
}
