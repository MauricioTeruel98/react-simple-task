import React, { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks.js";

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {

  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length + 1,
        description: task.description,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <>
        <TaskContext.Provider 
        value={{
            tasks,
            createTask,
            deleteTask,
        }}>
            {children}
        </TaskContext.Provider>
    </>
  );
}
