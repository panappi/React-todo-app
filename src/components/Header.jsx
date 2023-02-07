import styled from "styled-components";

export const Header = ({ doingTasksLength }) => {
  return (
    <StyledHeader>
      <div>
        <h1>Todoリスト</h1>
      </div>
      <div>{doingTasksLength}</div>
    </StyledHeader>
  );
};

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
