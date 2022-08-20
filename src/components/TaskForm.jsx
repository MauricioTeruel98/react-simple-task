import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const { createTask } = useContext(TaskContext);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
        title,
        description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form 
        action="" 
        onSubmit={handleSubmit} 
        className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea una tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={handleChangeTitle}
          value={title}
          className="bg-slate-300 p-3 w-full rounded-md text-white mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripción"
          onChange={handleChangeDescription}
          value={description}
          className="bg-slate-300 p-3 w-full rounded-md text-white mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-600">Guardar</button>
      </form>
    </div>
  );
};

export default TaskForm;
