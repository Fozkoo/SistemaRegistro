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








const servicesAPI = {
    showData,
    searchMen,
    searchWomen
}

export default servicesAPI;
