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
@Table(name="Proveedor")
public class Proveedor implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Basic(optional=false) // este campo ES obligatorio
	@Column(name="proveedor_id")
	private Integer proveedor_id;
	
	@Column(name="proveedor_nombre")
	@Basic(optional=false) // este campo ES obligatorio
	private String proveedor_nombre;

	@Column(name="proveedor_estado", columnDefinition = "TINYINT")
	private Boolean proveedor_estado=true;
	
	
	public Proveedor() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Proveedor(Integer proveedor_id, String proveedor_nombre, Boolean proveedor_estado) {
		super();
		this.proveedor_id = proveedor_id;
		this.proveedor_nombre = proveedor_nombre;
		this.proveedor_estado = proveedor_estado;
	}


	public Boolean getProveedor_estado() {
		return proveedor_estado;
	}


	public void setProveedor_estado(Boolean proveedor_estado) {
		this.proveedor_estado = proveedor_estado;
	}


	public Integer getProveedor_id() {
		return proveedor_id;
	}

	public void setProveedor_id(Integer proveedor_id) {
		this.proveedor_id = proveedor_id;
	}

	public String getProveedor_nombre() {
		return proveedor_nombre;
	}

	public void setProveedor_nombre(String proveedor_nombre) {
		this.proveedor_nombre = proveedor_nombre;
	}



	
}
