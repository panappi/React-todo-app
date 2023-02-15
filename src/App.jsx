import React from "react";
import { useState } from "react";
import "./styles/reset.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { Menu } from "./components/Menu";
import { InputForm } from "./components/InputForm";
import { StoreToDb } from "./learn/StoreToDb";
import { StoreFromDb } from "./learn/StoreFromDb";

// ファイル名とコンポーネント名は同じものにするのが一般的(大文字始まり)
const App = () => {
  console.log(process.env.REACT_APP_HELLO_WORLD);
  //////////// state ////////////
  // タスクを管理する
  const [tasks, setTasks] = useState([
    { id: 0, title: "洗濯1", isDone: false },
    { id: 1, title: "洗濯2", isDone: false },
    { id: 2, title: "洗濯3", isDone: false },
  ]);
  // 表示するタスクのフィルターを管理する
  const [filter, setFilter] = useState("ALL");
  // const [isFilter, setIsFilter] = useState(false)
  // FIXME: booleanで管理して、表示するテキストと分ける

  //////////// set関数 ////////////
  // タスクをtasksに追加する
  const addTask = (event, text) => {
    event.preventDefault();
    setTasks([...tasks, { id: tasks.length, title: text, isDone: false }]);
  };
  // タスクをtasksから削除しidを振り直す
  const removeTask = (id) => {
    setTasks(
      tasks
        .filter((tasks) => tasks.id !== id)
        .map((tasks, index) => {
          return {
            ...tasks,
            id: index,
          };
        })
    );
  };
  // フィルターを切り替える
  const toggleFilter = (value) => {
    setFilter(value === "ALL" ? "DOING" : "ALL");
  };
  // タスクの状態を切り替える
  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((tasks) => {
        if (tasks.id === id) {
          return {
            ...tasks,
            isDone: !tasks.isDone,
          };
        }
        return tasks;
      })
    );
  };
  // 実行済みタスクの数を数える
  const doneTasksLength = tasks.filter((task) => task.isDone).length;
  // 実行中タスクの数を数える
  const doingTasksLength = tasks.filter((task) => !task.isDone).length;

  return (
    <ThemeProvider theme={theme}>
      {/* <StyledApp> */}
      <Header doingTasksLength={doingTasksLength} />
      <Menu
        doneTasksLength={doneTasksLength}
        filter={filter}
        toggleFilter={toggleFilter}
      />
      <TaskList
        tasks={tasks}
        filter={filter}
        removeTask={removeTask}
        toggleTaskStatus={toggleTaskStatus}
      />
      <InputForm addTask={addTask} placeholder={"テキストを入力"} />

      {/* FireStoreとの通信確認 */}
      <StoreToDb />
      <StoreFromDb />
    </ThemeProvider>
  );
};

// export const StyledApp = styled.div`
//   /* padding: 50px 4% 0; */
// `;

export default App;
