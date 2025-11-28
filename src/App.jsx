import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, status: "todo" }]);
  };

  const updateTask = (id, newText) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const changeStatus = (id, status) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <TaskForm onAdd={addTask} />

      <div className="columns">
        <TaskColumn
          title="Todo"
          status="todo"
          tasks={tasks}
          onDelete={deleteTask}
          onUpdate={updateTask}
          onMove={changeStatus}
        />

        <TaskColumn
          title="In Progress"
          status="inprogress"
          tasks={tasks}
          onDelete={deleteTask}
          onUpdate={updateTask}
          onMove={changeStatus}
        />

        <TaskColumn
          title="Done"
          status="done"
          tasks={tasks}
          onDelete={deleteTask}
          onUpdate={updateTask}
          onMove={changeStatus}
        />
      </div>
    </div>
  );
}
