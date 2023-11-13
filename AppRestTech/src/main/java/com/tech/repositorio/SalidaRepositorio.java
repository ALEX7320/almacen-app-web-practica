package com.tech.repositorio;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tech.model.Salida;

@Repository
public interface SalidaRepositorio extends JpaRepository<Salida, Integer>{
	
	@Query(value="SELECT s FROM Salida s WHERE s.producto_id.producto_id=?1")
	List<Salida> findAllByProductoId(int id);

	//@Query(value="SELECT s FROM Salida s WHERE s.salida_fecha between ?1 AND ?2")
	@Query(value="SELECT s FROM Salida s INNER JOIN Producto p ON s.producto_id.producto_id = p.producto_id WHERE s.salida_fecha between ?1 AND ?2 AND p.producto_estado=true")
	List<Salida> findAllReporte(Date fecha_inicio, Date fecha_fin);
	
}

