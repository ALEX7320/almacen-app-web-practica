package com.tech;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class MovilRestTechApplication implements CommandLineRunner {


	public static void main(String[] args) {
		SpringApplication.run(MovilRestTechApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		System.out.println("\n\n//USUARIO ADMIN POR DEFECTO//"); 
		System.out.println("* username: admin"); 
		System.out.println("* password: admin"); 
		System.out.println("* rol: ADMIN\n");
		
		System.out.println("\n//USUARIO ALMACENERO POR DEFECTO//"); 
		System.out.println("* username: almacen"); 
		System.out.println("* password: admin"); 
		System.out.println("* rol: ALMACENERO\n\n"); 

		
	}

}
