import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import servicesAPI from '../service/helper';

function FormDelete() {
  
    const [estudiantes, setEstudiantes] = useState([]);
    const [selectedEstudianteId, setSelectedEstudianteId] = useState('');

    useEffect(() => {
        const showData = async () => {
          try {
            const data = await servicesAPI.showData();
            setEstudiantes(data);
          } catch (error) {
            console.log(error);
          }
        };
        showData();
    }, []);

    const handleSelectChange = (e) => {
        setSelectedEstudianteId(e.target.value);
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        if (selectedEstudianteId) {
            try {
                await servicesAPI.deleteStudent(selectedEstudianteId);
                alert('Estudiante eliminado correctamente');
                setEstudiantes(estudiantes.filter(est => est.id !== parseInt(selectedEstudianteId)));
                window.location.reload();
            } catch (error) {
                console.error('Error al eliminar el estudiante:', error);
                alert('Ocurrió un error al eliminar el estudiante');
            }
        } else {
            alert('Seleccione un estudiante para eliminar');
        }
    };

    return (
        <div className="container-form flex items-center justify-center w-[60%] shadow-2xl flex-col h-[750px] rounded-[10px] max-lg:w-[100%]">
            <Form onSubmit={handleDelete} className='formulario flex justify-center flex-col w-[50%] h-[500px] max-lg:w-[80%]'>
                <Form.Group className="mb-3">
                    <Form.Label>Seleccione el estudiante a eliminar</Form.Label>
                    <Form.Select aria-label="Default select example" value={selectedEstudianteId} onChange={handleSelectChange}>
                        <option value="">Seleccione un estudiante</option>
                        {estudiantes.map((estudiante) => (
                            <option key={estudiante.id} value={estudiante.id}>
                                {estudiante.nombre} {estudiante.apellido}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <button type="submit" className="btn btn-danger">Eliminar</button>
            </Form>
        </div>
    );
}

export default FormDelete;
