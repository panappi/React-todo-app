import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <header>
        <div>
          <h1>Todoリスト</h1>
        </div>
        <div id="doingTaskCount"></div>
      </header>
    </StyledHeader>
  );
};

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
