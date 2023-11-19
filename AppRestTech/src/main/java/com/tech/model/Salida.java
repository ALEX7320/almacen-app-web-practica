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

    
    

}
