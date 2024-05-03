import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState({
    name: '',
    description: '',
    completed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask({
      ...task,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({ name: '', description: '', completed: false }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={task.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Descripción:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={task.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="completed">Completado:</label>
        <input
          type="checkbox"
          id="completed"
          name="completed"
          checked={task.completed}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Agregar Tarea</button>
    </form>
  );
}

export default TaskForm;
