package com.tech.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tech.model.Producto;

@Repository
public interface ProductoRepositorio extends JpaRepository<Producto, Integer>{
	
	@Query(value="SELECT p FROM Producto p WHERE p.producto_estado = true")
	List<Producto> findAllActivos();

}
