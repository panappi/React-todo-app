import { useState } from "react";
import { TaskCard } from "./TaskCard";

export const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "洗濯", isDone: false },
    { id: 2, title: "洗濯", isDone: true },
    { id: 3, title: "洗濯", isDone: false },
  ]);
  return <div></div>;
};
