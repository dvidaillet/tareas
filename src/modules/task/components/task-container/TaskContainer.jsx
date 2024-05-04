import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { TaskContext } from "../../context/taskContext";
import { TaskDataTable } from "../../../../components/TaskDataTable";
import { ErrorMessage } from "../../../../components/ErrorMessaje";

export const TaskContainer = () => {
  const { tasks, removeTask, updateTask } = useContext(TaskContext);
  const [formActive, setFormActive] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleButtonClick = () => {
    // Activar la redirección estableciendo 'redirect' a true
    setRedirect(true);
    setFormActive(true);
  };

  // Si 'redirect' es true, redirigir al usuario a la página 'add-task'
  if (redirect) {
    return <Navigate to="/add-task" />;
  }

  const handleEdit = (index) => {
    updateTask(index);
  };

  const handleDelete = (index) => {
    removeTask(index);
  };
  return (
    <>
      <h2>Lista de tareas</h2>
      {!formActive && (
        <button onClick={handleButtonClick} disabled={formActive}>
          Add Task
        </button>
      )}
      {tasks.length === 0 ? (
        <ErrorMessage color="red">No hay elementos</ErrorMessage>
      ) : (
        <TaskDataTable
          data={tasks}
          onEdit={handleEdit}
          onDelete={handleDelete}
        ></TaskDataTable>
      )}
    </>
  );
};
