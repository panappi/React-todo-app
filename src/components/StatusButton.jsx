import styled from "styled-components";

export const StatusButton = ({ id, toggleTaskStatus }) => {
  return (
    <StyledStatusButton
      onClick={() => {
        toggleTaskStatus(id);
      }}
    >
      実行
    </StyledStatusButton>
  );
};

export const StyledStatusButton = styled.button``;
