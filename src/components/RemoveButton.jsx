import styled from "styled-components";
import { TrashCan } from "akar-icons";

export const RemoveButton = ({ id, removeTask }) => {
  return (
    <StyledRemoveButton
      onClick={() => {
        removeTask(id);
      }}
    >
      <button className="remove_btn">
        <TrashCan size={14} />
      </button>
    </StyledRemoveButton>
  );
};

export const StyledRemoveButton = styled.div`
  margin: 0 4vw 0 auto;
  width: 30px;
  min-height: 30px;
  /* vertical-align: middle; */
  display: flex;
  align-items: center;
  .remove_btn {
    margin: 0 0 0 auto;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* color: #dca9a0; */
    color: ${(props) => props.theme.MAIN};
    /* border-color: #dca9a0; */
    border-color: ${(props) => props.theme.MAIN};
    border-style: solid;
    border-width: 1.2px;
    border-radius: 50%;
  }
`;
