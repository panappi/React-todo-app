import { StyledTaskCard } from "./TaskCard";
import { useTasks } from "../hooks/useTasks";
import styled from "styled-components";

export const InputForm = () => {
  const { addTask } = useTasks;
  return (
    <StyledInputForm>
      <input type="text" />
      <input type="submit" onClick={(event) => addTask(event.target.value)} />
    </StyledInputForm>
  );
};

const StyledInputForm = styled.div`
  ${StyledTaskCard}
`;
