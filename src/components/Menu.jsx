import styled from "styled-components";

export const Menu = ({ doneTasksLength, filter, toggleFilter, colorList }) => {
  return (
    <StyledMenu colorList={colorList}>
      <div className="menu__counter">実行済み ({doneTasksLength}件)</div>
      <div
        className="menu__filter"
        onClick={() => {
          toggleFilter(filter);
        }}
      >
        {filter}
      </div>
    </StyledMenu>
  );
};

export const StyledMenu = styled.div`
  padding: 0 4% 0;
  display: flex;
  justify-content: space-between;
  .menu__counter {
    /* color: #c6c6c6; */
    color: ${(props) => [props.colorList.SUB]};
    font-size: 12px;
  }
  .menu__filter {
    padding-bottom: 4px;
    /* color: #dca9a0; */
    color: ${(props) => [props.colorList.MAIN]};
    font-size: 12px;
  }
`;
