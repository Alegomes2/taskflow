import { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Filter from "../components/Filter";

function Home() {

  // Estado com persistência
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");

  // Salvar no localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Adicionar tarefa
  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      title: task,
      completed: false
    };

    setTasks([...tasks, newTask]);
  };

  // Deletar tarefa
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Marcar como concluída
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Filtrar tarefas
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (

    <div className="min-h-screen flex flex-col items-center pt-20 gap-8">

      <h1 className="text-4xl font-bold text-cyan-400">
        TaskFlow
      </h1>

      <TaskForm addTask={addTask} />

      <Filter currentFilter={filter} setFilter={setFilter} />

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />

    </div>

  );

}

export default Home;
