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
@Table(name="Ingreso")
public class Ingreso {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Basic(optional=false) // este campo ES obligatorio
	@Column(name="ingreso_id")
	private Integer ingreso_id;
	
	@Column(name="ingreso_fecha")
	@Basic(optional=false) // este campo ES obligatorio
	@Temporal(TemporalType.DATE)
	private Date ingreso_fecha;
	
	@Column(name="ingreso_cantidad")
	@Basic(optional=false) // este campo ES obligatorio
	private Integer ingreso_cantidad;
	
	@Column(name="ingreso_detalle")
	private String ingreso_detalle;
	
	// RELACION
    @JoinColumn(name = "producto_id", referencedColumnName = "producto_id")
    @ManyToOne(optional = false)
	private Producto producto_id;
    
    @JoinColumn(name = "proveedor_id", referencedColumnName = "proveedor_id")
    @ManyToOne(optional = false)
	private Proveedor proveedor_id;

	public Ingreso() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Ingreso(Integer ingreso_id, Date ingreso_fecha, Integer ingreso_cantidad, String ingreso_detalle,
			Producto producto_id, Proveedor proveedor_id) {
		super();
		this.ingreso_id = ingreso_id;
		this.ingreso_fecha = ingreso_fecha;
		this.ingreso_cantidad = ingreso_cantidad;
		this.ingreso_detalle = ingreso_detalle;
		this.producto_id = producto_id;
		this.proveedor_id = proveedor_id;
	}



	public Integer getIngreso_id() {
		return ingreso_id;
	}

	public void setIngreso_id(Integer ingreso_id) {
		this.ingreso_id = ingreso_id;
	}

	public Date getIngreso_fecha() {
		return ingreso_fecha;
	}

	public void setIngreso_fecha(Date ingreso_fecha) {
		this.ingreso_fecha = ingreso_fecha;
	}

	public Integer getIngreso_cantidad() {
		return ingreso_cantidad;
	}

	public void setIngreso_cantidad(Integer ingreso_cantidad) {
		this.ingreso_cantidad = ingreso_cantidad;
	}

	public String getIngreso_detalle() {
		return ingreso_detalle;
	}

	public void setIngreso_detalle(String ingreso_detalle) {
		this.ingreso_detalle = ingreso_detalle;
	}

	public Producto getProducto_id() {
		return producto_id;
	}

	public void setProducto_id(Producto producto_id) {
		this.producto_id = producto_id;
	}

	public Proveedor getProveedor_id() {
		return proveedor_id;
	}

	public void setProveedor_id(Proveedor proveedor_id) {
		this.proveedor_id = proveedor_id;
	}
       

		
}
