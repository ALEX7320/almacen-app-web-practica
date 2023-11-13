package com.tech.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "roles")
public class Rol {
	
    @Id
	@Column(name="rolId")
    private Integer rolId;
    
	@Basic(optional=false) // este campo ES obligatorio
	@Column(name="rolNombre")
    private String rolNombre;

    public Rol(){

    }

     public Rol(Integer rolId, String rolNombre) {
		super();
		this.rolId = rolId;
		this.rolNombre = rolNombre;
	}


	public Integer getRolId() {
		return rolId;
	}


	public void setRolId(Integer rolId) {
		this.rolId = rolId;
	}


	public String getRolNombre() {
        return rolNombre;
    }

    public void setRolNombre(String rolNombre) {
        this.rolNombre = rolNombre;
    }
    

}
