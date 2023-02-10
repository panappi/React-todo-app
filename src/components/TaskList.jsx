import styled from "styled-components";
import { TaskCard } from "./TaskCard";

export const TaskList = ({
  tasks,
  filter,
  removeTask,
  toggleTaskStatus,
  colorList,
}) => {
  return (
    <StyledTaskList colorList={colorList}>
      {tasks
        .filter((task) => {
          return filter === "ALL" ? true : task.isDone === false;
        })
        .map((task) => {
          return (
            <TaskCard
              task={task}
              removeTask={removeTask}
              toggleTaskStatus={toggleTaskStatus}
              colorList={colorList}
            />
          );
        })}
    </StyledTaskList>
  );
};

export const StyledTaskList = styled.ul`
  margin: 0 0 0 4%;
  /* border-bottom-color: #ececec; */
  border-top-color: ${(props) => [props.colorList.BORDER]};
  border-top-style: solid;
  border-top-width: 1.2px;
`;
