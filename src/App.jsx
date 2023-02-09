import React from "react";
import { useState } from "react";
import "./styles/reset.css";
import styled from "styled-components";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { Menu } from "./components/Menu";
import { InputForm } from "./components/InputForm";

// ファイル名とコンポーネント名は同じものにするのが一般的(大文字始まり)
const App = () => {
  // state
  // タスクを管理する
  const [tasks, setTasks] = useState([
    { id: 0, title: "洗濯", isDone: false },
    { id: 1, title: "洗濯", isDone: false },
    { id: 2, title: "洗濯", isDone: false },
  ]);
  // 表示するタスクのフィルターを管理する
  const [filter, setFilter] = useState("ALL");

  // タスクをtasksに追加する
  const addTask = (event, text) => {
    setTasks([...tasks, { id: tasks.length, title: text, isDone: false }]);
    event.preventDefault();
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
    console.log(value);
  };
  // タスクの状態を切り替える
  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((tasks) => {
        if (tasks.id === id) {
          return {
            ...tasks,
            isDone: tasks.isDone === false ? true : false,
          };
        }
        return tasks;
      })
    );
  };
  // 実行済みタスクの数を数える
  const doneTasksLength = tasks.filter((task) => task.isDone === true).length;
  // 実行中タスクの数を数える
  const doingTasksLength = tasks.filter((task) => task.isDone === false).length;

  console.log("@@@ ", tasks);

  return (
    <StyledApp>
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
    </StyledApp>
  );
};

export const StyledApp = styled.div`
  padding: 50px 4% 0;
`;

export default App;
