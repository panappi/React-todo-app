import React from "react";
import "./styles/reset.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
// import { Menu } from "./components/Menu";
import { InputForm } from "./components/InputForm";

// ファイル名とコンポーネント名は同じものにするのが一般的(大文字始まり)
const App = () => {
  const [tasks, setTasks] = useState([
    { id: 0, title: "洗濯", isDone: false },
    { id: 1, title: "洗濯", isDone: true },
    { id: 2, title: "洗濯", isDone: false },
  ]);
  const addTask = (event, text) => {
    setTasks([...tasks, { id: tasks.length, title: text, isDone: false }]);
    event.preventDefault();
  };

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

  // const doneTasksLengths = tasks.filter((task) => task.isDone === true).length;

  console.log(tasks);

  return (
    <React.Fragment>
      <Header />
      <TaskList tasks={tasks} removeTask={removeTask} />
      <InputForm addTask={addTask} placeholder={"テキストを入力"} />
    </React.Fragment>
  );
};

export default App;
