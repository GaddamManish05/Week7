import React from 'react'
import TaskBar from './TaskBar'

function TaskList({tasks}) {
  return (
    <div>
        {
        tasks.map((task,index) => (
            <TaskBar key={index} task={task} />
        ))
        }
    </div>
  )
}

export default TaskList