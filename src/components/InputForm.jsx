// import { useTasks } from "../hooks/useTasks";
import { useState } from "react";
import styled from "styled-components";

export const InputForm = ({ addTask, placeholder }) => {
  // const { addTask } = useTasks;
  const [text, setText] = useState("");
  return (
    <StyledInputForm
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
      <button>追加</button>
    </StyledInputForm>
  );
};

export const StyledInputForm = styled.form``;

// useRefは使用せず、このコンポーネント内で入力テキストを管理するuseStateを定義する
// onChange(textに入力テキストを格納) -> onSubmit(addTaskでtextをtasksに追加)
// 上記のほうが一般的らしい
