import axios from 'axios';

// Crear una instancia de axios con la configuración de la URL base
const API = axios.create({
  baseURL: 'hhttp://localhost:3001/tasks'
});

export default API;