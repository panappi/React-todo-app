import React from "react";
import styled from "styled-components";
// import { useTasks } from "../hooks/useTasks";

export const TaskCard = ({ tasks }) => {
  // const { tasks } = useTasks;
  return (
    <>
      {tasks.map((todo) => {
        return <StyledTaskCard>{todo.title}</StyledTaskCard>;
      })}
    </>
  );
};

export const StyledTaskCard = styled.li``;
