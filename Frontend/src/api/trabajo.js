import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACK_URL; 

// Crear un nuevo trabajo
export const createTrabajo = async (data) => {
    try {
        const response = await axios.post(`https://lab-leroi.onrender.com/trabajo`, data);
        return response.data;
    } catch (error) {
        console.error("Error creando trabajo:", error);
        throw error;
    }
};

// Obtener todos los trabajos
export const getTrabajos = async () => {
    try {
        const response = await axios.get(`https://lab-leroi.onrender.com/trabajo`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo trabajos:", error);
        throw error;
    }
};

// Actualizar un trabajo específico
export const updateTrabajo = async (id, data) => {
    try {
        const response = await axios.put(`https://lab-leroi.onrender.com/trabajo/${id}`, data);
        return response.data;
    } catch (error) {
        console.error(`Error actualizando trabajo con ID ${id}:`, error);
        throw error;
    }
};

// Eliminar un trabajo específico
export const deleteTrabajo = async (id) => {
    try {
        const response = await axios.delete(`https://lab-leroi.onrender.com/trabajo/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error eliminando trabajo con ID ${id}:`, error);
        throw error;
    }
};

// Obtener información de una persona relacionada con su trabajo o gobierno
export const getTrabajoPersona = async (id) => {
    try {
        const response = await axios.get(`https://lab-leroi.onrender.com/trabajop/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error obteniendo información de la persona con ID ${id}:`, error);
        throw error;
    }
};
