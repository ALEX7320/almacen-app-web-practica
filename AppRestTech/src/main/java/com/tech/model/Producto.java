package com.tech.model;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="Producto")
public class Producto implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Basic(optional=false) // este campo ES obligatorio
	@Column(name="producto_id")
	private Integer producto_id;
	
	@Column(name="producto_nombre")
	@Basic(optional=false) // este campo ES obligatorio
	private String producto_nombre;
	
	@Column(name="producto_descripcion")
	private String producto_descripcion;
	
	@Column(name="producto_precio")
	private Double producto_precio;
	
	@Column(name="producto_imagen")
	private String producto_imagen;
	
	@Column(name="producto_estado", columnDefinition = "TINYINT")
	private Boolean producto_estado=true;
	
    @JoinColumn(name = "categoria_id", referencedColumnName = "categoria_id")
    @ManyToOne(optional = false)	
	private Categoria categoria_id;
    


	public Producto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Producto(Integer producto_id, String producto_nombre, String producto_descripcion, Double producto_precio,
			String producto_imagen, Boolean producto_estado, Categoria categoria_id) {
		super();
		this.producto_id = producto_id;
		this.producto_nombre = producto_nombre;
		this.producto_descripcion = producto_descripcion;
		this.producto_precio = producto_precio;
		this.producto_imagen = producto_imagen;
		this.producto_estado = producto_estado;
		this.categoria_id = categoria_id;
	}





	public Integer getProducto_id() {
		return producto_id;
	}

	public void setProducto_id(Integer producto_id) {
		this.producto_id = producto_id;
	}

	public String getProducto_nombre() {
		return producto_nombre;
	}

	public void setProducto_nombre(String producto_nombre) {
		this.producto_nombre = producto_nombre;
	}

	public String getProducto_descripcion() {
		return producto_descripcion;
	}

	public void setProducto_descripcion(String producto_descripcion) {
		this.producto_descripcion = producto_descripcion;
	}

	public Double getProducto_precio() {
		return producto_precio;
	}

	public void setProducto_precio(Double producto_precio) {
		this.producto_precio = producto_precio;
	}


	public String getProducto_imagen() {
		return producto_imagen;
	}

	public void setProducto_imagen(String producto_imagen) {
		this.producto_imagen = producto_imagen;
	}

	public Boolean getProducto_estado() {
		return producto_estado;
	}

	public void setProducto_estado(Boolean producto_estado) {
		this.producto_estado = producto_estado;
	}

	public Categoria getCategoria_id() {
		return categoria_id;
	}

	public void setCategoria_id(Categoria categoria_id) {
		this.categoria_id = categoria_id;
	}

	

}
