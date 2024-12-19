import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACK_URL; 

// Crear una ubicación
export const createUbicacion = async (data) => {
    try {
        const response = await axios.post(`https://lab-leroi.onrender.com/ubicacion`, data);
        return response.data;
    } catch (error) {
        console.error("Error creando ubicación:", error);
        throw error;
    }
};

// Obtener todas las ubicaciones
export const getUbicaciones = async () => {
    try {
        const response = await axios.get(`https://lab-leroi.onrender.com/ubicacion`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo ubicaciones:", error);
        throw error;
    }
};

// Obtener todas las ubicaciones de una vivienda
export const getUbicacionesDeVivienda = async (id) => {
    try {
        const response = await axios.get(`https://lab-leroi.onrender.com/ubicacionm/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error obteniendo ubicaciones de la vivienda con ID ${id}:`, error);
        throw error;
    }
};

// Obtener todas las ubicaciones de un municipio
export const getUbicacionesDeMunicipio = async (id) => {
    try {
        const response = await axios.get(`https://lab-leroi.onrender.com/ubicacionm/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error obteniendo ubicaciones del municipio con ID ${id}:`, error);
        throw error;
    }
};

// Actualizar una ubicación específica
export const updateUbicacion = async (data) => {
    try {
        const response = await axios.put(`https://lab-leroi.onrender.com/ubicacionm/`, data);
        return response.data;
    } catch (error) {
        console.error("Error actualizando ubicación:", error);
        throw error;
    }
};

// Eliminar una ubicación específica
export const deleteUbicacion = async (data) => {
    try {
        const response = await axios.delete(`https://lab-leroi.onrender.com/ubicacionm/`, { data });
        return response.data;
    } catch (error) {
        console.error("Error eliminando ubicación:", error);
        throw error;
    }
};
