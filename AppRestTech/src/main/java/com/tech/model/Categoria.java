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
	


	
}
