import API from './api';

const taskService = {
  // Obtener todas las tareas
  fetchTasks: async () => {
    try {
      const response = await API.get('/tasks');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Crear una nueva tarea
  createTask: async (task) => {
    try {
      const response = await API.post('/tasks', task);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Actualizar una tarea existente
  updateTask: async (id, updatedTask) => {
    try {
      const response = await API.put(`/tasks/${id}`, updatedTask);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Eliminar una tarea
  deleteTask: async (id) => {
    try {
      const response = await API.delete(`/tasks/${id}`);
      return response.data;  // A menudo, el delete no devuelve datos (depende de la API)
    } catch (error) {
      throw error;
    }
  }
};

export default taskService;
