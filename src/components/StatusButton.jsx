import styled from "styled-components";

export const StatusButton = ({ id, isDone, toggleTaskStatus, colorList }) => {
  return (
    <StyledStatusButton
      isDone={isDone}
      colorList={colorList}
      onClick={() => {
        toggleTaskStatus(id);
      }}
    >
      <div className="status_btn"></div>
    </StyledStatusButton>
  );
};

export const StyledStatusButton = styled.button`
  width: 30px;
  min-height: 30px;
  vertical-align: middle;
  /* border: none; */
  .status_btn {
    position: relative;
    width: 20px;
    height: 20px;
    /* border-color: #c6c6c6; */
    border-color: ${(props) =>
      props.isDone ? props.colorList.MAIN : props.colorList.SUB};
    border-style: solid;
    border-width: 1.2px;
    border-radius: 50%;
    &::after {
      content: "";
      display: ${(props) => (props.isDone ? "block" : "none")};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 12px;
      height: 12px;
      /* border-color: #dca9a0; */
      border-color: ${(props) => [props.colorList.MAIN]};
      border-style: solid;
      border-width: 1.2px;
      border-radius: 50%;
      /* background-color: #dca9a0; */
      background-color: ${(props) => [props.colorList.MAIN]};
    }
  }
`;
