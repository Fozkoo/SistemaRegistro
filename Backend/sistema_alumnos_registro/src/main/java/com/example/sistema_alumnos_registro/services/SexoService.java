package com.example.sistema_alumnos_registro.services;

import com.example.sistema_alumnos_registro.models.Sexo;
import com.example.sistema_alumnos_registro.repositories.SexoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class SexoService {

    @Autowired
    private SexoRepository sexoRepository;

    public ResponseEntity<?> getAllSexo (){
        List<Sexo> sexos = sexoRepository.findAll();
        return ResponseEntity.ok(sexos);
    }

}
