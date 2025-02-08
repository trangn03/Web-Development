import { useState, useEffect, use } from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { v4 as uuidv4 } from "uuid"
import {loadTasks, saveTasks} from "./utils/Storage"

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, {id: uuidv4(), ...task, complete: false}])
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleComplete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="home">
      <h1>Todo-Notes-App</h1>
      <TaskForm addTask={addTask}/> 
      <TaskList tasks={tasks} handleComplete={handleComplete} handleDelete={handleDelete}/>

    </div>

    
  )
}

export default App
