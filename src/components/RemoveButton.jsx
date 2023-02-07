import styled from "styled-components";

export const RemoveButton = ({ id, removeTask }) => {
  return (
    <StyledRemoveButton
      onClick={() => {
        removeTask(id);
        console.log(id);
      }}
    >
      削除
    </StyledRemoveButton>
  );
};

export const StyledRemoveButton = styled.button``;
