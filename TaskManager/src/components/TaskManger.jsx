import React from 'react'
import TaskList from './TaskList'
import AddTask from './AddTask'
import TaskCount from './TaskCount'
import {useState} from 'react'

function TaskManger() {
  const [tasks,setTasks] = useState([])
  const addNewTask = (taskObj) => {
    setTasks([...tasks,taskObj])
  }
  console.log(tasks)
  return (
    <div>
      <h1 className='text-3xl mb-5 m-auto'>Task Manager</h1>
      <div className='flex gap-20 p-10 m-auto '>
        <AddTask addNewTask={addNewTask}></AddTask>
        <TaskList tasks = {tasks}></TaskList>
        <TaskCount tasks = {tasks}></TaskCount>
      </div>
    </div>
  )
}

export default TaskManger