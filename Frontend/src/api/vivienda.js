import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACK_URL; 

// Crear una vivienda
export const createVivienda = async (data) => {
    try {
        const response = await axios.post(`https://lab-leroi.onrender.com/vivienda`, data);
        return response.data;
    } catch (error) {
        console.error("Error creando vivienda:", error);
        throw error;
    }
};

// Obtener todas las viviendas
export const getViviendas = async () => {
    try {
        const response = await axios.get(`https://lab-leroi.onrender.com/vivienda`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo viviendas:", error);
        throw error;
    }
};
// Obtener detalles completos de una vivienda
export const getViviendaDetalle = async (id) => {
    try {
        const response = await axios.get(`https://lab-leroi.onrender.com/viviendadetalle/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error obteniendo detalles de la vivienda con ID ${id}:`, error);
        throw error;
    }
};


// Obtener una vivienda por ID
export const getViviendaById = async (id) => {
    try {
        const response = await axios.get(`https://lab-leroi.onrender.com/vivienda/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error obteniendo vivienda con ID ${id}:`, error);
        throw error;
    }
};

// Actualizar una vivienda
export const updateVivienda = async (id, data) => {
    try {
        const response = await axios.put(`https://lab-leroi.onrender.com/vivienda/${id}`, data);
        return response.data;
    } catch (error) {
        console.error(`Error actualizando vivienda con ID ${id}:`, error);
        throw error;
    }
};

// Eliminar una vivienda
export const deleteVivienda = async (id) => {
    try {
        const response = await axios.delete(`https://lab-leroi.onrender.com/vivienda/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error eliminando vivienda con ID ${id}:`, error);
        throw error;
    }

};
