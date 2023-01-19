// import React from "react";
import "./App.css";
// import Child from "./Child";
// import Hooks from "./Hooks";
import Learn from "./Learn";

// ファイル名とコンポーネント名は同じものにするのが一般的(大文字始まり)
const App = () => {
  // // JavaScriptが書ける場所
  // const todos = [
  //   { id: 1, title: "Todo 1", status: false },
  //   { id: 2, title: "Todo 2", status: true },
  //   { id: 3, title: "Todo 3", status: false },
  // ];
  // return (
  //   // HTMLが書ける場所
  //   <React.Fragment>
  //     {/* returnできるのは1つのDOM要素だけなので、存在しないDOM要素として1つにまとめる役割がある */}
  //     {/* 省略形は <></> */}
  //     <div className="App">Hello world</div>
  //     <ul>
  //       {
  //         // {}の中はJavaScriptが書ける場所
  //         todos.map((todo) => {
  //           return <li>{todo.title}</li>;
  //         })
  //       }
  //     </ul>
  //   </React.Fragment>
  // );

  // const message = "Hello World!";
  // const arr = ["React", "勉強中", { status: "初心者" }];
  // return (
  //   <div>
  //     <Child data={message} data2 data3={arr} {...{ arr }} />
  //   </div>
  // );

  // return <Hooks />;

  return <Learn />;
};

export default App;
