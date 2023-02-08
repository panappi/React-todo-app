import styled from "styled-components";

export const Menu = ({ doneTasksLength, tasks, filter, toggleFilter }) => {
  return (
    <StyledMenu>
      <div>実行済み ({doneTasksLength}件)</div>
      <div
        onClick={() => {
          toggleFilter(filter);
          // tasks.map((task) => {
          //   return task.isDone === true
          //     ? toggleFilter(filter)
          //     : toggleFilter("");
          // });
        }}
      >
        {filter}
      </div>
    </StyledMenu>
  );
};

export const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;
