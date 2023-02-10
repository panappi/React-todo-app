import styled from "styled-components";

export const Header = ({ doingTasksLength }) => {
  return (
    <StyledHeader>
      {/* <div> */}
      <h1>Todoリスト</h1>
      {/* </div> */}
      <div>{doingTasksLength}</div>
    </StyledHeader>
  );
};

export const StyledHeader = styled.header`
  padding: 50px 4% 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* color: #dca9a0; */
  /* color: ${(props) => props.theme.MAIN}; */
  color: ${({ theme }) => theme.MAIN};
  font-size: 32px;
  font-weight: bold;
`;
