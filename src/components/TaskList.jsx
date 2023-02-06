import styled from "styled-components";
import { TaskCard } from "./TaskCard";

export const TaskList = ({ value }) => {
  return (
    <StyledTaskList>
      <TaskCard tasks={value} />
    </StyledTaskList>
  );
};

export const StyledTaskList = styled.ul``;
