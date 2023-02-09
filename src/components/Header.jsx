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
  color: #dca9a0;
  font-size: 32px;
  font-weight: bold;
`;
