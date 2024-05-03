import React, { createContext, useState } from "react";

// Crear el contexto
export const TaskContext = createContext();

// Crear el proveedor del contexto
export const TaskProvider = ({ children }) => {
  const taskListToShow = [
    {
      name: "Primera tarea",
      description: "descripcion primera tarea",
      completed: false,
    },
    {
      name: "2 tarea",
      description: "descripcion tarea 2",
      completed: true,
    },
    {
      name: "3 tarea",
      description: "descripcion tarea 3",
      completed: false,
    },
  ];
  const [tasks, setTasks] = useState(taskListToShow);

  // Función para agregar tareas
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Función para eliminar tareas
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Función para actualizar tareas
  const updateTask = (index, updatedTask) => {
    const newTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
    setTasks(newTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
