package com.tech.model;

import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
@Table(name="Salida")
public class Salida {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Basic(optional=false) // este campo ES obligatorio
	@Column(name="salida_id")
	private Integer salida_id;
	
	@Column(name="salida_fecha")
	@Basic(optional=false) // este campo ES obligatorio
	@Temporal(TemporalType.DATE)
	private Date salida_fecha;
	
	@Column(name="salida_cantidad")
	@Basic(optional=false) // este campo ES obligatorio
	private Integer salida_cantidad;
	
	@Column(name="salida_detalle")
	private String salida_detalle;
	
	// RELACION
    @JoinColumn(name = "producto_id", referencedColumnName = "producto_id")
    @ManyToOne(optional = false)
	private Producto producto_id;

    
	public Salida() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Salida(Integer salida_id, Date salida_fecha, Integer salida_cantidad, String salida_detalle,
			Producto producto_id) {
		super();
		this.salida_id = salida_id;
		this.salida_fecha = salida_fecha;
		this.salida_cantidad = salida_cantidad;
		this.salida_detalle = salida_detalle;
		this.producto_id = producto_id;
	}


	public Integer getSalida_id() {
		return salida_id;
	}

	public void setSalida_id(Integer salida_id) {
		this.salida_id = salida_id;
	}

	public Date getSalida_fecha() {
		return salida_fecha;
	}

	public void setSalida_fecha(Date salida_fecha) {
		this.salida_fecha = salida_fecha;
	}

	public Integer getSalida_cantidad() {
		return salida_cantidad;
	}

	public void setSalida_cantidad(Integer salida_cantidad) {
		this.salida_cantidad = salida_cantidad;
	}

	public String getSalida_detalle() {
		return salida_detalle;
	}

	public void setSalida_detalle(String salida_detalle) {
		this.salida_detalle = salida_detalle;
	}

	public Producto getProducto_id() {
		return producto_id;
	}

	public void setProducto_id(Producto producto_id) {
		this.producto_id = producto_id;
	}


    

}
