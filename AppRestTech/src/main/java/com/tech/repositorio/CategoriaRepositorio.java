package com.tech.repositorio;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tech.model.Categoria;

@Repository
public interface CategoriaRepositorio extends JpaRepository<Categoria, Integer>{

	@Query(value="SELECT c FROM Categoria c WHERE c.categoria_estado = true")
	List<Categoria> findAllActivos();
	
}
