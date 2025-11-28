import TaskCard from "./TaskCard";

export default function TaskColumn({
  title,
  status,
  tasks,
  onDelete,
  onUpdate,
  onMove,
}) {
  const filtered = tasks.filter((t) => t.status === status);

  return (
    <div className="column">
      <h2>{title}</h2>

      {filtered.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onMove={onMove}
        />
      ))}
    </div>
  );
}
