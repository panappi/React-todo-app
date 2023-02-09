import styled from "styled-components";
import { TrashCan } from "akar-icons";

export const RemoveButton = ({ id, removeTask }) => {
  return (
    <StyledRemoveButton
      onClick={() => {
        removeTask(id);
      }}
    >
      <div className="remove_btn">
        <TrashCan size={14} />
      </div>
    </StyledRemoveButton>
  );
};

export const StyledRemoveButton = styled.button`
  width: 30px;
  min-height: 30px;
  vertical-align: middle;
  .remove_btn {
    margin-right: 4vw;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #dca9a0;
    border-color: #dca9a0;
    border-style: solid;
    border-width: 1.2px;
    border-radius: 50%;
  }
`;
