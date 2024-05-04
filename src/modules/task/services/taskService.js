import API from "../../../axios/api";

const taskService = {
  // Obtener todas las tareas
  fetchTasks: async () => {
    try {
      // Hacer la consulta a la URL http://localhost:3001/tasks
      const response = await API.get("/tasks");

      // Devolver los datos obtenidos
      return response.data;
    } catch (error) {
      // Manejar cualquier error que ocurra durante la consulta
      console.error("Error al hacer la consulta:", error);
      throw error;
    }
  },

  // Crear una nueva tarea
  createTask: async (task) => {
    try {
      const response = await API.post("/tasks", task);
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
      return response.data; // A menudo, el delete no devuelve datos (depende de la API)
    } catch (error) {
      throw error;
    }
  },
};

export default taskService;
