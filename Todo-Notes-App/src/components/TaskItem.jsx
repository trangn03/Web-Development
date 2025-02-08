import "./../styles/tasklist.css";

const TaskItem = ({ task, handleComplete, handleDelete }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.notes}</p>
      <div className="task-actions">
        <button onClick={() => handleComplete(task.id)}>✔️ Complete</button>
        <button onClick={() => handleDelete(task.id)}>🗑 Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
