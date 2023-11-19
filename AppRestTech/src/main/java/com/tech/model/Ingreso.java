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

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
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

		
}
