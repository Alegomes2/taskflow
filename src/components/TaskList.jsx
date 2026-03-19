import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <div className="flex flex-col gap-3 w-full max-w-md">

      {tasks.length === 0 && (
        <p className="text-gray-400 text-center">
          Nenhuma tarefa ainda
        </p>
      )}

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}

    </div>
  );
}

export default TaskList;