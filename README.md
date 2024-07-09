Sistema de Registro de Estudiantes

Descripción General

El sistema de registro de estudiantes es una aplicación web que permite gestionar los datos de los estudiantes de manera eficiente y organizada. Las principales funcionalidades del sistema incluyen:

Registro de Estudiantes: Permite cargar información básica de los estudiantes, incluyendo nombre, apellido, documento, sexo y carrera.
Filtrado y Paginado: Ofrece un sistema de filtrado por letra y un paginado indexado para facilitar la búsqueda y visualización de los estudiantes.
Eliminación de Estudiantes: Proporciona una interfaz para eliminar estudiantes registrados.
Visualización por Género: Posee páginas separadas para mostrar estudiantes masculinos y femeninos.

Arquitectura del Sistema
Backend
El backend está construido con Spring Boot e implementa varios servicios para manejar las operaciones del sistema. Utiliza una base de datos MySQL que contiene tres tablas principales:

Estudiantes: Almacena la información de los estudiantes.
Sexo: Contiene las opciones de género disponibles.
Carreras: Lista las diferentes carreras académicas.

Controladores: Los controladores gestionan las solicitudes HTTP y delegan las operaciones necesarias a los servicios correspondientes.

EstudianteController: Gestiona las operaciones CRUD relacionadas con los estudiantes.

EstudianteService: Implementa la lógica para la gestión de estudiantes.
SexoService: Maneja la lógica relacionada con los géneros.
CarreraService: Administra la lógica de las carreras.

Frontend
El frontend está desarrollado con React y utiliza TailwindCSS para la estilización, así como componentes de React Bootstrap para la interfaz de usuario.

Configuración de la Base de Datos
La base de datos MySQL está compuesta por las siguientes tablas:

Estudiantes

id: Identificador único del estudiante.
nombre: Nombre del estudiante.
apellido: Apellido del estudiante.
documento: Documento de identificación del estudiante.
sexoId: Identificador del género del estudiante.
carreraId: Identificador de la carrera del estudiante.
Sexo

id: Identificador único del género.
nombre: Nombre del género (e.g., Masculino, Femenino).
Carreras

id: Identificador único de la carrera.
nombre: Nombre de la carrera.

Despliegue y Ejecución

Backend

Clonar el repositorio del backend.
Configurar la conexión a la base de datos MySQL en el archivo application.properties.
Ejecutar la aplicación Spring Boot utilizando un IDE compatible o desde la línea de comandos con mvn spring-boot:run.

Frontend

Clonar el repositorio del frontend.
Instalar las dependencias con npm install.
Ejecutar la aplicación React con npm run dev.

API Endpoints

GET /estudiante: Obtiene la lista de todos los estudiantes.
POST /estudiante: Agrega un nuevo estudiante.
DELETE /estudiante/delete/{id}: Elimina un estudiante por su ID.
GET /sexo: Obtiene la lista de géneros.
GET /carreras: Obtiene la lista de carreras.
GET /estudiante/sexo/{sexo}: Obtiene estudiantes por género.
GET /estudiante/carrera/informatica: Obtiene estudiantes de la carrera de informática.

Creditos : Joaquin Mighetto 
![1](https://github.com/Fozkoo/SistemaRegistro/assets/150302407/41ff450b-9343-4b17-9b55-bc65ba17840a)
![2](https://github.com/Fozkoo/SistemaRegistro/assets/150302407/587ca24a-1d38-49c8-a651-1e2ed1356762)
![3](https://github.com/Fozkoo/SistemaRegistro/assets/150302407/b4e39ac9-60cf-4d42-baf1-24ab2c6a7d9d)


