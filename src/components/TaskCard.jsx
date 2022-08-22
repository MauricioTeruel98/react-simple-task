import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ task }) => {
  const { deleteTask, toggleTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <div>
        <h3 className="text-xl font-bold capitalize">{task.title}</h3>
        {task.isDone ? (
          <h3 className="text-green-500 font-bold uppercase">Completada</h3>
        ) : (
          <h3 className="text-yellow-500 font-bold uppercase">Pendiente</h3>
        )}
      </div>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <div>
        {task.isDone ? (
          <button
            className="bg-yellow-500 px-2 py-1 rounded-md mt-4 hover:bg-yellow-600"
            onClick={() => toggleTask(task.id)}
          >
            To Do
          </button>
        ) : (
          <button
            className="bg-green-500 px-2 py-1 rounded-md mt-4 hover:bg-green-600"
            onClick={() => toggleTask(task.id)}
          >
            Done
          </button>
        )}
      </div>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-600"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
};

export default TaskCard;
