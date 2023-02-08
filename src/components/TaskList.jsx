import styled from "styled-components";
import { TaskCard } from "./TaskCard";

export const TaskList = ({ tasks, filter, removeTask, toggleTaskStatus }) => {
  return (
    <StyledTaskList>
      {tasks
        .filter((task) => {
          return filter === "ALL" ? true : task.isDone === false;
          // if (filter === "ALL") return true;
          // if (filter === "DOING") return task.isDone === false;
        })
        .map((task) => {
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
