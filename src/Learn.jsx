import React, { useState } from "react";

const Learn = () => {
  /* ↓state変数を定義 */
  const [text, setText] = useState("");

  /* ↓state変数「addText」を定義 */
  const [addText, setAddText] = useState("");

  /* ↓関数onClickAddTextを定義 */
  const onClickAddText = (event) => {
    // addTextに入力したtextを反映させる
    setAddText(text);
    // inputタグ(入力フォーム)とpタグ(入力中)のtextを空にする
    setText("");
    // submit処理の規定の動作(画面描画など)を防ぐ
    event.preventDefault();
  };

  return (
    <div>
      {/* 
        buttonタグのonClickイベントではEnterキーで入力確定できないため
        formタグにonSubmitイベントを追加してonClickAddTextが動作するように変更した
      */}
      <form onSubmit={onClickAddText}>
        {/* ↓value属性にstate変数「text」を指定 */}
        <input value={text} onChange={(event) => setText(event.target.value)} />

        {/* <button onClick={onClickAddText}>追加</button> */}
        <button>追加</button>

        {/* ↓state変数「text」を表示する */}
        <p>入力中：{text}</p>
        {/* ↓state変数「addText」を表示する */}
        <p>入力完了：{addText}</p>
      </form>
    </div>
  );
};

export default Learn;
