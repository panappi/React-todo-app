import styled from "styled-components";
import { TaskCard } from "./TaskCard";

export const TaskList = ({ tasks, removeTask, toggleTaskStatus }) => {
  return (
    <StyledTaskList>
      {tasks.map((task) => {
        return (
          <TaskCard
            task={task}
            removeTask={removeTask}
            toggleTaskStatus={toggleTaskStatus}
          />
        );
      })}
    </StyledTaskList>
  );
};

export const StyledTaskList = styled.ul``;
