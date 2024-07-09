import axios from "axios";

const URL = "http://localhost:8080/estudiante";

const api = axios.create({
    baseURL: URL
});

const showData = async () => {
    try { 
        const response = await api.get(URL);
        return response.data;
    } catch (error) {
        console.error("No se pudo encontrar la dirección", error);
        throw error;
    }
};

const searchMen = async () => {
    try {
        const response = await api.get("sexo/masculino");
        return response.data;
    } catch (err) {
        console.error("No se pudo encontrar la dirección", err);
        throw err;
    }
};

const searchWomen = async () => {
    try {
        const response = await api.get("sexo/femenino");
        return response.data;
    } catch (err) {
        console.error("No se pudo encontrar la dirección", err);
        throw err;
    }
};

const searchAllSexos = async () => {
    try {
        const response = await api.get("sexo");
        return response.data;
    } catch (err) {
        console.error("No se pudo encontrar la dirección", err);
        throw err;
    }
};

const searchAllCarreras = async () => {
    try {
        const response = await api.get("carreras");
        return response.data;
    } catch (err) {
        console.error("No se pudo encontrar la dirección", err);
        throw err;
    }
};

const addStudent = async (studentData) => {
    try {
        const response = await api.post("/", studentData);
        return response.data;
    } catch (err) {
        console.error("No se pudo agregar el estudiante", err);
        throw err;
    }
};

const deleteStudent = async (id) => {
    try {
        const response = await api.delete(`/delete/${id}`);
        return response.data;
    } catch (err) {
        console.error("No se pudo eliminar el estudiante", err);
        throw err;
    }
};


const servicesAPI = {
    showData,
    searchMen,
    searchWomen,
    searchAllSexos,
    searchAllCarreras,
    addStudent,
    deleteStudent
};

export default servicesAPI;
