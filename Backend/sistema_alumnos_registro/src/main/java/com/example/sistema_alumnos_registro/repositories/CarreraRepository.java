package com.example.sistema_alumnos_registro.repositories;

import com.example.sistema_alumnos_registro.models.Carrera;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarreraRepository extends JpaRepository<Carrera, Integer> {
    Carrera findById(int id);
}
