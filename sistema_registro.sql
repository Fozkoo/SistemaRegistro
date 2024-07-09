-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema sistema_registro
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sistema_registro
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sistema_registro` DEFAULT CHARACTER SET utf8mb3 ;
USE `sistema_registro` ;

-- -----------------------------------------------------
-- Table `sistema_registro`.`carrera`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sistema_registro`.`carrera` (
  `id_carrera` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_carrera`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sistema_registro`.`sexo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sistema_registro`.`sexo` (
  `id_sexo` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_sexo`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sistema_registro`.`estudiante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sistema_registro`.`estudiante` (
  `id_estudiante` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `documento` INT NOT NULL,
  `sexo_id_sexo` INT NOT NULL,
  `carrera_id_carrera` INT NOT NULL,
  PRIMARY KEY (`id_estudiante`),
  INDEX `fk_estudiante_sexo_idx` (`sexo_id_sexo` ASC) VISIBLE,
  INDEX `fk_estudiante_carrera1_idx` (`carrera_id_carrera` ASC) VISIBLE,
  CONSTRAINT `fk_estudiante_carrera1`
    FOREIGN KEY (`carrera_id_carrera`)
    REFERENCES `sistema_registro`.`carrera` (`id_carrera`),
  CONSTRAINT `fk_estudiante_sexo`
    FOREIGN KEY (`sexo_id_sexo`)
    REFERENCES `sistema_registro`.`sexo` (`id_sexo`))
ENGINE = InnoDB
AUTO_INCREMENT = 20
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
