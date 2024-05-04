import React, { createContext, useState } from "react";

// Crear el contexto
export const TaskContext = createContext();

// Crear el proveedor del contexto
export const TaskProvider = ({ children }) => {
  const taskListToShow = [
    {
      id: "21d2s1ds",
      name: "Primera tarea",
      description: "descripcion primera tarea",
      completed: false,
    },
    {
      id: "9sd89s8d",
      name: "Segunda tarea",
      description: "descripcion tarea 2",
      completed: true,
    },
    {
      id: "4f5d4f5d4",
      name: "Tercera tarea",
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
    const newTasks = tasks.filter((task) => task.id !== index);
    setTasks(newTasks);
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
