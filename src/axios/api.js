import axios from 'axios';

// Crear una instancia de axios con la configuración de la URL base
const API = axios.create({
  baseURL: 'http://localhost:5000'
});

export default API;