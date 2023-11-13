package com.tech.repositorio;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tech.model.Proveedor;

@Repository
public interface ProveedorRepositorio extends JpaRepository<Proveedor, Integer>{
	
	@Query(value="SELECT p FROM Proveedor p WHERE p.proveedor_estado = true")
	List<Proveedor> findAllActivos();
	
}
