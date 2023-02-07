import React from "react";
import styled from "styled-components";
import { RemoveButton } from "./RemoveButton";
// import { useTasks } from "../hooks/useTasks";

export const TaskCard = ({ tasks, removeTask }) => {
  // const { tasks } = useTasks;
  return (
    <>
      {tasks.map((todo) => {
        return (
          <StyledTaskCard>
            <div>{todo.title}</div>
            <RemoveButton id={todo.id} tasks={tasks} removeTask={removeTask} />
          </StyledTaskCard>
        );
      })}
    </>
  );
};

export const StyledTaskCard = styled.li`
  display: flex;
  justify-content: space-between;
`;
