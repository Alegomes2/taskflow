function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <div className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded-lg">

      <span
        onClick={() => toggleTask(task.id)}
        className={`cursor-pointer ${
          task.completed ? "line-through text-gray-500" : "text-gray-200"
        }`}
      >
        {task.title}
      </span>

      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-400 hover:text-red-500"
      >
        Deletar
      </button>

    </div>
  );
}

export default TaskItem;