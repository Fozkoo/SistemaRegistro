import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import servicesAPI from '../service/helper';

function FormAdd() {
  const [sexos, setSexos] = useState([]);
  const [carreras, setCarreras] = useState([]);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    documento: '',
    sexoId: '',
    carreraId: ''
  });

  const showSexos = async () => {
    try {
      const data = await servicesAPI.searchAllSexos();
      setSexos(data);
    } catch (error) {
      console.error('Error al obtener los sexos:', error);
    }
  };

  const showCarreras = async () => {
    try {
      const data = await servicesAPI.searchAllCarreras();
      setCarreras(data);
    } catch (error) {
      console.error('Error al obtener las carreras:', error);
    }
  };

  useEffect(() => {
    showSexos();
    showCarreras();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await servicesAPI.addStudent(formData);
      alert('Alumno agregado correctamente');
      window.location.reload();
    } catch (error) {
      alert('Ocurrió un error al agregar el alumno');
      console.error('Error al agregar el alumno:', error);
    }
  };

  return (
    <> 
      
      <div className="container-form flex items-center justify-center w-[60%] shadow-2xl  flex-col h-[750px] rounded-[10px] max-lg:w-[100%]">
        <Form onSubmit={handleSubmit} className='formulario flex justify-center flex-col w-[50%] h-[500px] max-lg:w-[80%]'>
          <Form.Group className="mb-3">
            <Form.Label>Nombre *</Form.Label>
            <Form.Control
              type="text"
              name='nombre'
              placeholder='Nombre'
              required
              value={formData.nombre}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Apellido *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Apellido"
              name='apellido'
              required
              value={formData.apellido}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Documento *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Documento"
              name='documento'
              required
              value={formData.documento}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Sexo *</Form.Label>
            <Form.Select
              name='sexoId'
              required
              value={formData.sexoIdSexo}
              onChange={handleChange}
            >
              <option value="">Seleccionar Sexo</option>
              {sexos.map(sexo => (
                <option key={sexo.id} value={sexo.id}>
                  {sexo.nombre.toUpperCase()}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Carrera *</Form.Label>
            <Form.Select
              name='carreraId'
              required
              value={formData.carreraIdCarrera}
              onChange={handleChange}
            >
              <option value="">Seleccionar Carrera</option>
              {carreras.map(carrera => (
                <option key={carrera.id} value={carrera.id}>
                  {carrera.nombre.toUpperCase()}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <div className="contain-buton">
            <Button variant="primary" type="submit">
              Cargar Alumno
            </Button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default FormAdd;
