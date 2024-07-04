package com.example.sistema_alumnos_registro.repositories;

import com.example.sistema_alumnos_registro.models.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EstudianteRepository extends JpaRepository<Estudiante, Integer> {}