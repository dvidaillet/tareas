import React, { useContext, useState } from "react";
import { TaskContext } from "../../context/taskContext";
import { TaskDataTable } from "../../../../components/TaskDataTable";

export const TaskContainer = () => {
  const { tasks, removeTask, updateTask } = useContext(TaskContext);
  const [formActive, setFormActive] = useState(false);

  const handleAddTask = () => setFormActive(true);

  const handleEdit = (index) => {
    updateTask(index)
  };

  const handleDelete = (index) => {
    removeTask(index)
  };
  return (
    <>
      <h3>Lista de tareas</h3>
      {!formActive && (
        <button onClick={handleAddTask} disabled={formActive}>
          Add Task
        </button>
      )}
      <TaskDataTable
        data={tasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
      ></TaskDataTable>
    </>
  );
};
