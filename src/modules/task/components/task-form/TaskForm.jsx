import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from 'uuid';
import { Navigate } from 'react-router-dom';
import { TaskContext } from "../../context/taskContext";

export const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [redirect, setRedirect] = useState(false);

  // Define el esquema de validación usando Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido"),
    description: Yup.string().required("La descripción es requerida"),
  });

  // Configura Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      completed: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const taskWithId = { ...values, id: uuidv4() }; // Asignar un ID aleatorio
      addTask(taskWithId);
      resetForm(); // Resetea el formulario después de enviar
      setRedirect(true)
    },
  });

   // Si 'redirect' es true, redirigir al usuario a la página 'add-task'
   if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="description">Descripción:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.description && formik.errors.description ? (
          <div>{formik.errors.description}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="completed">Completado:</label>
        <input
          type="checkbox"
          id="completed"
          name="completed"
          checked={formik.values.completed}
          onChange={formik.handleChange}
        />
      </div>
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};
