package com.tech.repositorio;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tech.model.Usuario;

@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Integer>{

	Optional<Usuario> findUserByUsername(String username);

}
