import React from "react";
import { TaskContainer } from "../components/task-container/TaskContainer";
import { StyledContainer } from "../../../components/container";

const HomePage = () => {
  return (
    <StyledContainer>
      <h1>Home Page</h1>
      <TaskContainer />
    </StyledContainer>
  );
};

export default HomePage;
