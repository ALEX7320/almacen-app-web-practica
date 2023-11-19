package com.tech.model;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
	
	
}
