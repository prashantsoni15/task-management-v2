import { useState } from "react";

export default function TaskCard({ task, onDelete, onUpdate, onMove }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const save = () => {
    onUpdate(task.id, text);
    setEditing(false);
  };

  return (
    <div className="task-card">
      {editing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <p>{task.text}</p>
      )}

      {/* Status Buttons */}
      <div className="status-actions">
        {task.status !== "todo" && (
          <button onClick={() => onMove(task.id, "todo")}>Todo</button>
        )}
        {task.status !== "inprogress" && (
          <button onClick={() => onMove(task.id, "inprogress")}>
            In Progress
          </button>
        )}
        {task.status !== "done" && (
          <button onClick={() => onMove(task.id, "done")}>Done</button>
        )}
      </div>

      {/* Edit + Delete */}
      <div className="task-actions">
        {editing ? (
          <button className="save-btn" onClick={save}>
            Save
          </button>
        ) : (
          <button className="edit-btn" onClick={() => setEditing(true)}>
            Edit
          </button>
        )}

        <button className="delete-btn" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
