import styled from "styled-components";

export const Menu = ({ doneTasksLength }) => {
  return (
    <StyledMenu>
      <div>実行済み ({doneTasksLength}件)</div>
      <div>実行済みタスクを非表示</div>
    </StyledMenu>
  );
};

export const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;
