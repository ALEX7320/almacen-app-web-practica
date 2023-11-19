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

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
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
    
	

}
