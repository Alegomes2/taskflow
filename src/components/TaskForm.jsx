import { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    addTask(task);
    setTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 w-full max-w-md"
    >
      <input
        type="text"
        placeholder="Digite uma nova tarefa..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white outline-none"
      />

      <button
        type="submit"
        className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
      >
        Adicionar
      </button>
    </form>
  );
}

export default TaskForm;