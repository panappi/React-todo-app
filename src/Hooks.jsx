import React, { useState, useEffect } from "react";

// useState: stateを持つことができる
//           二つの要素を持った配列を返す
// useEffect: レンダリングの後に処理を動作させることができる
//            第二引数に配列を与えて特定の値が変化した時のみ動作させるようにすることもできる

const Hooks = () => {
  // setCountは関数
  const [count, setCount] = useState(0);

  // 画面がレンダリングされる度に動作する
  useEffect(() => {
    console.log("count数が増えるとレンダリングされます");
  });

  return (
    <>
      {/* 
      {count}の値が変わるたびにレンダリングされる
      setCountを使わないと、countの値を変更できない
       */}
      <p>You clicked {count} times</p>
      {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
      <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>
      {/*
      setCountの引数にコールバック関数を指定することで
      動作するたびに現在のcountの値を取得することができる
      (count+1を引数にするときと同じ結果が得られる)
       */}
    </>
  );
};

export default Hooks;
