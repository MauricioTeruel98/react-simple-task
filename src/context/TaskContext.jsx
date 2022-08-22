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
        isDone: false,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isDone: !task.isDone,
          };
        }
        return task;
      }),
    );
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
            toggleTask,
        }}>
            {children}
        </TaskContext.Provider>
    </>
  );
}
