import React from "react";
import { StyledContainer } from "../../../components/container";
import { TaskForm } from "../components/task-form/TaskForm";

const AddTaskPage = () => {
  return (
    <StyledContainer>
      <h1>Add TaskPage Page</h1>
      <TaskForm />
    </StyledContainer>
  );
};

export default AddTaskPage;
