import styled from "styled-components";
import { RemoveButton } from "./RemoveButton";
import { StatusButton } from "./StatusButton";
// import { useTasks } from "../hooks/useTasks";

export const TaskCard = ({ task, removeTask, toggleTaskStatus, colorList }) => {
  // const { tasks } = useTasks;
  return (
    <StyledTaskCard colorList={colorList}>
      <StatusButton
        id={task.id}
        isDone={task.isDone}
        toggleTaskStatus={toggleTaskStatus}
        colorList={colorList}
      />
      <div className="card_border">
        <div className="card_text">{task.title}</div>
        <RemoveButton
          id={task.id}
          removeTask={removeTask}
          colorList={colorList}
        />
      </div>
    </StyledTaskCard>
  );
};

export const StyledTaskCard = styled.li`
  padding: 6px 0;
  display: flex;
  font-size: 16px;
  .card_border {
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* border-bottom-color: #ececec; */
    border-bottom-color: ${(props) => [props.colorList.BORDER]};
    border-bottom-style: solid;
    border-bottom-width: 1.2px;
  }
  .card_text {
    display: flex;
    align-items: center;
  }
`;
