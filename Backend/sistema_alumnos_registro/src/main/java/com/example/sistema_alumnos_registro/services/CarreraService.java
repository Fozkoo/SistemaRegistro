package com.example.sistema_alumnos_registro.services;


import com.example.sistema_alumnos_registro.models.Carrera;
import com.example.sistema_alumnos_registro.repositories.CarreraRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class CarreraService {

    @Autowired
    private CarreraRepository carreraRepository;

    public ResponseEntity<?> getAllCarrera (){
        List<Carrera> carreras = carreraRepository.findAll();
        return ResponseEntity.ok(carreras);
    }

}
