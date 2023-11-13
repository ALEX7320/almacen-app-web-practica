-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema database_tech
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema database_tech
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `database_tech` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `database_tech` ;

-- -----------------------------------------------------
-- Table `database_tech`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `database_tech`.`categoria` (
  `categoria_id` INT NOT NULL AUTO_INCREMENT,
  `categoria_estado` TINYINT NULL DEFAULT NULL,
  `categoria_nombre` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`categoria_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `database_tech`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `database_tech`.`producto` (
  `producto_id` INT NOT NULL AUTO_INCREMENT,
  `producto_descripcion` VARCHAR(255) NULL DEFAULT NULL,
  `producto_estado` TINYINT NULL DEFAULT NULL,
  `producto_imagen` VARCHAR(255) NULL DEFAULT NULL,
  `producto_nombre` VARCHAR(255) NOT NULL,
  `producto_precio` DOUBLE NULL DEFAULT NULL,
  `categoria_id` INT NOT NULL,
  PRIMARY KEY (`producto_id`),
  CONSTRAINT `FKodqr7965ok9rwquj1utiamt0m`
    FOREIGN KEY (`categoria_id`)
    REFERENCES `database_tech`.`categoria` (`categoria_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 12
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `database_tech`.`proveedor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `database_tech`.`proveedor` (
  `proveedor_id` INT NOT NULL AUTO_INCREMENT,
  `proveedor_estado` TINYINT NULL DEFAULT NULL,
  `proveedor_nombre` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`proveedor_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `database_tech`.`ingreso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `database_tech`.`ingreso` (
  `ingreso_id` INT NOT NULL AUTO_INCREMENT,
  `ingreso_cantidad` INT NOT NULL,
  `ingreso_detalle` VARCHAR(255) NULL DEFAULT NULL,
  `ingreso_fecha` DATE NOT NULL,
  `producto_id` INT NOT NULL,
  `proveedor_id` INT NOT NULL,
  PRIMARY KEY (`ingreso_id`),
  CONSTRAINT `FKq9578bg5to2p5i7dtrd3i9vw9`
    FOREIGN KEY (`producto_id`)
    REFERENCES `database_tech`.`producto` (`producto_id`),
  CONSTRAINT `FKr42jsboenc02ej157nhiat4sm`
    FOREIGN KEY (`proveedor_id`)
    REFERENCES `database_tech`.`proveedor` (`proveedor_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 15
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `database_tech`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `database_tech`.`roles` (
  `rol_id` INT NOT NULL,
  `rol_nombre` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`rol_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `database_tech`.`salida`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `database_tech`.`salida` (
  `salida_id` INT NOT NULL AUTO_INCREMENT,
  `salida_cantidad` INT NOT NULL,
  `salida_detalle` VARCHAR(255) NULL DEFAULT NULL,
  `salida_fecha` DATE NOT NULL,
  `producto_id` INT NOT NULL,
  PRIMARY KEY (`salida_id`),
  CONSTRAINT `FKjie768vq0nko7v2v4ov0c7kff`
    FOREIGN KEY (`producto_id`)
    REFERENCES `database_tech`.`producto` (`producto_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 20
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `database_tech`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `database_tech`.`usuarios` (
  `usuario_id` INT NOT NULL AUTO_INCREMENT,
  `apellido` VARCHAR(255) NOT NULL,
  `direccion` VARCHAR(255) NOT NULL,
  `dni` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `enabled` TINYINT NOT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `telefono` VARCHAR(255) NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`usuario_id`)
  )
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `database_tech`.`usuario_rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `database_tech`.`usuario_rol` (
  `usuario_id` INT NOT NULL,
  `rol_id` INT NOT NULL,
  CONSTRAINT `FKe3kd49gu3mhj2ty5kl44qsytp`
    FOREIGN KEY (`rol_id`)
    REFERENCES `database_tech`.`roles` (`rol_id`),
  CONSTRAINT `FKktsemf1f6awjww4da0ocv4n32`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `database_tech`.`usuarios` (`usuario_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
