import React from 'react'
import { useState } from 'react'
import "../styles/taskform.css"

function TaskForm() {
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title.trim()) return;
        addTask({title, notes});
        setTitle("");
        setNotes("");
    }

  return (
    <div className="task-form-container">
        <h1>Todo Notes App</h1>
        <form className="task-form" onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Add a new task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
            className="task-notes"
            placeholder="Add Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
        />

        <button type="submit">Add Task</button>

        </form>
    </div>
  )
}

export default TaskForm
