import React, { useState } from "react";

export const TaskList = () => {
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

  const [taskListState, setTaskListState] = useState(taskListToShow);
  console.log("🚀 - TaskList - taskListState:", taskListState);

  return (
    <div>
      <h3>Lista de tareas</h3>
      <ol>
        {taskListState.map((iten, index) => (
          <div key={index}>
            {iten.name} -{iten.completed ? "✅" : "🚫"}
          </div>
        ))}
      </ol>
    </div>
  );
};
