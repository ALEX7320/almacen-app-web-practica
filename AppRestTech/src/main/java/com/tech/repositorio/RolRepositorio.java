package com.tech.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tech.model.Rol;

@Repository
public interface RolRepositorio extends JpaRepository<Rol, Integer> {
	
}
