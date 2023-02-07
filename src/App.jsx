import React from "react";
import "./styles/reset.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { Menu } from "./components/Menu";
import { InputForm } from "./components/InputForm";

// ファイル名とコンポーネント名は同じものにするのが一般的(大文字始まり)
const App = () => {
  const [tasks, setTasks] = useState([
    { id: 0, title: "洗濯", isDone: false },
    { id: 1, title: "洗濯", isDone: false },
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

  const doneTasksLength = tasks.filter((task) => task.isDone === true).length;
  const doingTasksLength = tasks.filter((task) => task.isDone === false).length;

  console.log(tasks);

  return (
    <React.Fragment>
      <Header doingTasksLength={doingTasksLength} />
      <Menu doneTasksLength={doneTasksLength} />
      <TaskList
        tasks={tasks}
        removeTask={removeTask}
        toggleTaskStatus={toggleTaskStatus}
      />
      <InputForm addTask={addTask} placeholder={"テキストを入力"} />
    </React.Fragment>
  );
};

export default App;
