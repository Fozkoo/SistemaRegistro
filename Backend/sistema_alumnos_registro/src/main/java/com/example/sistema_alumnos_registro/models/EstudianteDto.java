package com.example.sistema_alumnos_registro.models;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EstudianteDto {
    private String nombre;
    private String apellido;
    private int documento;
    private int sexoId;
    private int carreraId;
}
