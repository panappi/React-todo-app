// import { useTasks } from "../hooks/useTasks";
import { useState } from "react";
import styled from "styled-components";
import { Plus } from "akar-icons";
import { StatusButton } from "./StatusButton";

export const InputForm = ({ addTask, placeholder, colorList }) => {
  // const { addTask } = useTasks;
  const [text, setText] = useState("");
  return (
    <StyledInputForm colorList={colorList}>
      <StatusButton colorList={colorList} />
      <form
        className="form_border"
        onSubmit={(event) => {
          addTask(event, text);
          setText("");
        }}
      >
        <input
          type="text"
          placeholder={placeholder}
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button className="form_btn">
          <Plus size={16} />
        </button>
      </form>
    </StyledInputForm>
  );
};

export const StyledInputForm = styled.div`
  margin: 0 0 0 4%;
  display: flex;
  align-items: center;
  font-size: 16px;
  .form_border {
    padding: 6px 0;
    width: 100%;
    /* border-bottom-color: #ececec; */
    border-bottom-color: ${(props) => [props.colorList.BORDER]};
    border-bottom-style: solid;
    border-bottom-width: 1.2px;
  }
  .form_btn {
    vertical-align: middle;
    /* color: #dca9a0; */
    color: ${(props) => [props.colorList.MAIN]};
  }
`;

// useRefは使用せず、このコンポーネント内で入力テキストを管理するuseStateを定義する
// onChange(textに入力テキストを格納) -> onSubmit(addTaskでtextをtasksに追加)
// 上記のほうが一般的らしい
