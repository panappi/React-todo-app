import styled from "styled-components";
import { TaskCard } from "./TaskCard";

export const TaskList = ({ tasks, removeTask }) => {
  return (
    <StyledTaskList>
      <TaskCard tasks={tasks} removeTask={removeTask} />
    </StyledTaskList>
  );
};

export const StyledTaskList = styled.ul``;
