import TaskItem from "./TaskItem";
import "./../styles/tasklist.css";

const TaskList = ({ tasks, handleComplete, handleDelete }) => {
  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} handleComplete={handleComplete} handleDelete={handleDelete} />
        ))
      ) : (
        <p className="no-tasks">No tasks yet!</p>
      )}
    </div>
  );
};

export default TaskList;
