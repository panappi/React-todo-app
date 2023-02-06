import { useState } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "洗濯", isDone: false },
    { id: 2, title: "洗濯", isDone: true },
    { id: 3, title: "洗濯", isDone: false },
  ]);

  const addTask = (value) => {
    setTasks([...tasks, { id: 4, title: value, isDone: false }]);

    console.log(tasks);
  };

  const doneTasksLengths = tasks.filter((task) => task.isDone === true).length;

  return {
    tasks,
    setTasks,
    addTask,
    doneTasksLengths,
  };
};
