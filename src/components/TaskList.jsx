import styled from "styled-components";
import { TaskCard } from "./TaskCard";

export const TaskList = ({ tasks, filter, removeTask, toggleTaskStatus }) => {
  return (
    <StyledTaskList>
      {tasks
        .filter((task) => {
          return !task.isDone;
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
      {/* &&の左側の条件式がTrueのとき右側を返す */}
      {filter !== "DOING" &&
        tasks
          .filter((task) => task.isDone)
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

export const StyledTaskList = styled.ul`
  margin: 0 0 0 4%;
  /* border-bottom-color: #ececec; */
  border-top-color: ${(props) => props.theme.BORDER};
  border-top-style: solid;
  border-top-width: 1.2px;
`;
