import React, { useContext } from "react";
import { TaskContext } from '../../context/taskContext';

export const TaskList = () => {
  const { tasks, removeTask, updateTask } = useContext(TaskContext);
  console.log("🚀 - TaskList - tasks:", tasks)  

  return (
    <div>
      <h3>Lista de tareas</h3>
      <ol>
        {tasks.map((iten, index) => (
          <div key={index}>
            {iten.name} -{iten.completed ? "✅" : "🚫"}
          </div>
        ))}
      </ol>
    </div>
  );
};
