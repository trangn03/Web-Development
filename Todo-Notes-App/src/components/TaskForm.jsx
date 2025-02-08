import { useState } from "react";
import "./../styles/taskform.css";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ title, notes });
    setTitle("");
    setNotes("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
        <h2>Task title</h2>
      <input 
        type="text" 
        placeholder="eg: Complete Quiz" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
        <h2>Task notes (optional) </h2>
      <textarea 
        placeholder="eg: CS Quiz, Math quiz" 
        value={notes} 
        onChange={(e) => setNotes(e.target.value)} 
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
