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
		
		System.out.println("BackEnd Iniciado");
		
	}

}
