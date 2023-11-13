package com.tech.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tech.model.Ingreso;

@Repository
public interface IngresoRepositorio extends JpaRepository<Ingreso, Integer>{
	
	@Query(value="SELECT i FROM Ingreso i WHERE i.producto_id.producto_id=?1")
	List<Ingreso> findAllByProductoId(int id);
	
}
