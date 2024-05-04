import axios from 'axios';

// Crear una instancia de axios con la configuración de la URL base
const API = axios.create({
  baseURL: 'http://localhost:3001'
});

export default API;