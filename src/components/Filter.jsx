function Filter({ currentFilter, setFilter }) {

  const filters = ["all", "active", "completed"];

  return (
    <div className="flex gap-3">

      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setFilter(filter)}
          className={`px-3 py-1 rounded-lg capitalize transition ${
            currentFilter === filter
              ? "bg-cyan-500 text-white"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
          }`}
        >
          {filter === "all" && "Todas"}
          {filter === "active" && "Pendentes"}
          {filter === "completed" && "Concluídas"}
        </button>
      ))}

    </div>
  );
}

export default Filter;