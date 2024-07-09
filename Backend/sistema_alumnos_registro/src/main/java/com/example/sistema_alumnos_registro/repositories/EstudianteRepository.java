package com.example.sistema_alumnos_registro.repositories;

import com.example.sistema_alumnos_registro.models.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EstudianteRepository extends JpaRepository<Estudiante, Integer> {

    @Query("SELECT e FROM Estudiante e WHERE e.sexoIdSexo.id = ?1")
    List<Estudiante> buscarHombres(int n);



    @Query("SELECT e FROM Estudiante  e WHERE e.carreraIdCarrera.id = ?1")
    List<Estudiante> alumnosInformatica(int n);


}