package com.example.sistema_alumnos_registro.controllers;
import com.example.sistema_alumnos_registro.models.Carrera;
import com.example.sistema_alumnos_registro.models.Estudiante;
import com.example.sistema_alumnos_registro.models.EstudianteDto;
import com.example.sistema_alumnos_registro.models.Sexo;
import com.example.sistema_alumnos_registro.repositories.CarreraRepository;
import com.example.sistema_alumnos_registro.repositories.EstudianteRepository;
import com.example.sistema_alumnos_registro.repositories.SexoRepository;
import com.example.sistema_alumnos_registro.services.CarreraService;
import com.example.sistema_alumnos_registro.services.EstudianteService;
import com.example.sistema_alumnos_registro.services.SexoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/estudiante")
public class EstudianteController {

    @Autowired
    private EstudianteService estudianteService;

    @Autowired
    private SexoService sexoService;

    @Autowired
    private SexoRepository sexoRepository;

    @Autowired
    private CarreraRepository carreraRepository;
    @Autowired
    private EstudianteRepository estudianteRepository;
    @Autowired
    private CarreraService carreraService;

    @CrossOrigin
    @GetMapping("")
    public ResponseEntity<?> getEstudiantes() {
        return estudianteService.getAll();
    }


    @CrossOrigin
    @PostMapping("/")
    public ResponseEntity<?> addEstudiante(@RequestBody EstudianteDto estudiante) {

        Sexo sexo = sexoRepository.findById(estudiante.getSexoId());
        Carrera carrera = carreraRepository.findById(estudiante.getCarreraId());

        return estudianteService.createEstudiante(new Estudiante(estudiante, sexo, carrera));
    }

    @CrossOrigin
    @GetMapping("/sexo")
    public ResponseEntity<?> getAllSexo (){
        return sexoService.getAllSexo();
    }




    @CrossOrigin
    @GetMapping("/sexo/{sexo}")
    public ResponseEntity<?> getBySexo(@PathVariable String sexo){
        try {
            int idSexo = sexoRepository.findByNombre(sexo).getId();
            return ResponseEntity.ok(estudianteRepository.buscarHombres(idSexo));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
        }
    }



    @CrossOrigin
    @GetMapping("/carrera/informatica")
    public ResponseEntity<?> getCarreraInfomatica(){
        return ResponseEntity.ok(estudianteRepository.alumnosInformatica(1));
    }

    @CrossOrigin
    @GetMapping("/carreras")
    public ResponseEntity<?> getAllCarreras(){
        return carreraService.getAllCarrera();
    }

    @CrossOrigin
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEstudiante(@PathVariable int id) {
        return estudianteService.deleteEstudianteById(id);
    }



}