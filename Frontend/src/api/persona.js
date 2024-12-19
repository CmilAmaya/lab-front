import axios from "axios";


const BASE_URL = import.meta.env.VITE_BACK_URL; 
console.log("BASE_URL: ", BASE_URL);
// Obtener todas las personas
export const getPersonas = async () => {
  try {
    const response = await axios.get('https://lab-leroi.onrender.com/persona');
    console.log("BASE_URL: ", BASE_URL);
    console.log(`${BASE_URL}/persona`);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo personas:", error);
    throw error;
  }
};

// Crear una nueva persona
export const createPersona = async (persona) => {
  try {
    const response = await axios.post('https://lab-leroi.onrender.com/persona', persona);
    return response.data;
  } catch (error) {
    console.error("Error creando persona:", error);
    throw error;
  }
};

// Obtener una persona por ID
export const getPersonaById = async (id) => {
  try {
    const response = await axios.get('https://lab-leroi.onrender.com/persona/${id}');
    return response.data;
  } catch (error) {
    console.error(`Error obteniendo persona con ID ${id}:`, error);
    throw error;
  }
};

// Actualizar una persona
export const updatePersona = async (id, persona) => {
  try {
    const response = await axios.put('https://lab-leroi.onrender.com/persona/${id}', persona);
    return response.data;
  } catch (error) {
    console.error(`Error actualizando persona con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar una persona
export const deletePersona = async (id) => {
  try {
    const response = await axios.delete('https://lab-leroi.onrender.com/persona/${id}');
    return response.data;
  } catch (error) {
    console.error(`Error eliminando persona con ID ${id}:`, error);
    throw error;
  }
};
