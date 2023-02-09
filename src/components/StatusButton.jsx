import styled from "styled-components";

export const StatusButton = ({ id, toggleTaskStatus }) => {
  return (
    <StyledStatusButton
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
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: #c6c6c6;
    border-style: solid;
    border-width: 1.2px;
    border-radius: 50%;
  }
`;
