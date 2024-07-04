import axios from "axios";


const URL = "http://localhost:8080/estudiante";

const api = axios.create({
    baseURL: URL
})


const showData = async () => {
    try { 
        const response = await api.get(URL);
        return response.data;
    } catch (error) {
        console.error("No se pudo encontrar la dirección", error);
        throw error;
    }
}


const searchMen = async () => {
    try {
        const response = await api.get(URL);
        const allStudents = response.data;
        
        
        const maleStudents = allStudents.filter(estudiante => estudiante.sexoIdSexo == "masculino");
        
        return maleStudents;
    } catch (error) {
        console.error("Error al buscar estudiantes masculinos", error);
        throw error;
    }
}

const searchWomen = async () => {
    try {
        const response = await api.get(URL);
        const allStudents = response.data;
        
        
        const womanStudents = allStudents.filter(estudiante => estudiante.sexoIdSexo == "femenino");
        
        return womanStudents;
    } catch (error) {
        console.error("Error al buscar estudiantes femeninos", error);
        throw error;
    }
}





const servicesAPI = {
    showData,
    searchMen,
    searchWomen
}

export default servicesAPI;
