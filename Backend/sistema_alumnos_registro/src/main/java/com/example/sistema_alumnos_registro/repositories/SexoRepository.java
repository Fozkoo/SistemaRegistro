package com.example.sistema_alumnos_registro.repositories;

import com.example.sistema_alumnos_registro.models.Sexo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SexoRepository extends JpaRepository<Sexo, Integer> {
    Sexo findById(int id);
    Sexo findByNombre(String nombre);
}
