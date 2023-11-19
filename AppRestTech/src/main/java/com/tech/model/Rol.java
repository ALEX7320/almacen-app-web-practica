package com.tech.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
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
@Table(name="roles")
public class Rol {
	
    @Id
	@Column(name="rolId")
    private Integer rolId;
    
	@Basic(optional=false) // este campo ES obligatorio
	@Column(name="rolNombre")
    private String rolNombre;

}
