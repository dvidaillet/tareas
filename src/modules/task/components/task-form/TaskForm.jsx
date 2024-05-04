import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { Navigate } from "react-router-dom";
import { TaskContext } from "../../context/taskContext";
import { ErrorMessage } from "../../../../components/ErrorMessaje";
import {
  CompleteButton,
  DeleteButton,
} from "../../../../components/completedButton";

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const CheckboxLabel = styled.label`
  margin-left: 5px;
  font-weight: normal;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

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
      setRedirect(true);
    },
  });

  // Si 'redirect' es true, redirigir al usuario a la página 'add-task'
  if (redirect) {
    return <Navigate to="/" />;
  }

  const handleCancel = () => {
    formik.setErrors(null); // Restablece los errores a un objeto vacío
    formik.resetForm();
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormGroup>
        <Label htmlFor="name">Nombre:</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorMessage>{formik.errors.name}</ErrorMessage>
        ) : null}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="description">Descripción:</Label>
        <Input
          type="text"
          id="description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.description && formik.errors.description ? (
          <ErrorMessage>{formik.errors.description}</ErrorMessage>
        ) : null}
      </FormGroup>
      <FormGroup>
        <CheckboxLabel htmlFor="completed">Completado:</CheckboxLabel>
        <Input
          type="checkbox"
          id="completed"
          name="completed"
          checked={formik.values.completed}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <ButtonContainer>
        <CompleteButton complete={false} type="submit">
          Add Task
        </CompleteButton>
        <DeleteButton type="reset" onClick={handleCancel}>
          Cancel
        </DeleteButton>
      </ButtonContainer>
    </Form>
  );
};
