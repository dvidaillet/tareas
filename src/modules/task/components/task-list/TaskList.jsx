import React, { useContext, useState } from "react";
import { TaskContext } from "../../context/taskContext";
import { TaskForm } from "../task-form/TaskForm";

export const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const [formActive, setFormActive] = useState(false);

  const handleAddTask = () => setFormActive(true);

  return (
    <>
      <h3>Lista de tareas</h3>
      {!formActive && (
        <button onClick={handleAddTask} disabled={formActive}>
          Add Task
        </button>
      )}
      {formActive && <TaskForm />}
      <ol>
        {tasks.map((iten, index) => (
          <div key={index}>
            {iten.name} -{iten.completed ? "✅" : "🚫"}
          </div>
        ))}
      </ol>
    </>
  );
};
