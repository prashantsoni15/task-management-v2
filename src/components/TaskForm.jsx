import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState("");

  const submit = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <div className="task-form">
      <input
        placeholder="Enter a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={submit}>Add</button>
    </div>
  );
}
