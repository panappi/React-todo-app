import styled from "styled-components";
import { RemoveButton } from "./RemoveButton";
import { StatusButton } from "./StatusButton";
// import { useTasks } from "../hooks/useTasks";

export const TaskCard = ({ task, removeTask, toggleTaskStatus }) => {
  // const { tasks } = useTasks;
  return (
    <StyledTaskCard>
      <StatusButton id={task.id} toggleTaskStatus={toggleTaskStatus} />
      <div>{task.title}</div>
      <RemoveButton id={task.id} removeTask={removeTask} />
    </StyledTaskCard>
  );
};

export const StyledTaskCard = styled.li`
  display: flex;
  justify-content: space-between;
`;
