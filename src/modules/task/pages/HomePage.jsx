import React from "react";
import { TaskContainer } from "../components/task-container/TaskContainer";
import { StyledContainer } from "../../../components/container";

const HomePage = () => {
  return (
    <StyledContainer>
      <TaskContainer />
    </StyledContainer>
  );
};

export default HomePage;
