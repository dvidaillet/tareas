import React, { createContext, useState, useEffect } from "react";
import taskService from "../services/taskService";

// Crear el contexto
export const TaskContext = createContext();

// Crear el proveedor del contexto
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Llamar a la función fetchTasks para obtener los datos de las tareas
    taskService
      .fetchTasks()
      .then((data) => {
        setTasks(data); // Establecer los datos obtenidos en el estado
      })
      .catch((error) => {
        console.error("Error al obtener tareas:", error);
      });
  }, [tasks]);

  // Función para agregar tareas
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Función para eliminar tareas
  const removeTask = (index) => {
    taskService
      .deleteTask(index)
      .then((data) => {
        setTasks(data); // Establecer los datos obtenidos en el estado
      })
      .catch((error) => {
        console.error("Error al obtener tareas:", error);
      });
  };

  // Función para actualizar tareas
  const updateTask = (index) => {
    const newTasks = tasks.map((task) => {
      if (task.id === index) {
        task.completed = true;
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
