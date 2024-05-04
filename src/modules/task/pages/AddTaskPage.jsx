import React from "react";
import { StyledContainer } from "../../../components/container";
import { TaskForm } from "../components/task-form/TaskForm";

const AddTaskPage = () => {
  return (
    <StyledContainer>
      <h2>Add TaskPage Page</h2>
      <TaskForm />
    </StyledContainer>
  );
};

export default AddTaskPage;
