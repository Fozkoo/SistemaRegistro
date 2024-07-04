package com.example.sistema_alumnos_registro.models;

import com.example.sistema_alumnos_registro.repositories.SexoRepository;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;


@Entity
@Table(name = "estudiante")
public class Estudiante {


    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "id_estudiante", nullable = false)
    private Integer id;

    @Column(name = "nombre", nullable = false, length = 45)
    private String nombre;

    @Column(name = "apellido", nullable = false, length = 45)
    private String apellido;

    @Column(name = "documento", nullable = false)
    private Integer documento;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "sexo_id_sexo", nullable = false)
    private Sexo sexoIdSexo;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "carrera_id_carrera", nullable = false)
    private Carrera carreraIdCarrera;

    protected Estudiante (){}

    public  Estudiante(EstudianteDto estudianteDto, Sexo sexoId, Carrera carreraId){
        this.nombre = estudianteDto.getNombre();
        this.apellido = estudianteDto.getApellido();
        this.documento = estudianteDto.getDocumento();
        this.sexoIdSexo = sexoId;
        this.carreraIdCarrera = carreraId;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public Integer getDocumento() {
        return documento;
    }

    public void setDocumento(Integer documento) {
        this.documento = documento;
    }

    public String getSexoIdSexo() {
        return sexoIdSexo.getNombre();
    }

    public void setSexoIdSexo(Sexo sexoIdSexo) {
        this.sexoIdSexo = sexoIdSexo;
    }

    public String getCarreraIdCarrera() {
        return carreraIdCarrera.getNombre();
    }

    public void setCarreraIdCarrera(Carrera carreraIdCarrera) {
        this.carreraIdCarrera = carreraIdCarrera;
    }
}
