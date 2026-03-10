import React from 'react'

function TaskBar({task}) {
  if(!task){
    return <p>No Task Available</p>
  }
  // console.log(task?.description)
  return (
    <div className='flex flex-col p-5 w-7/12 rounded-2xl shadow-[0px_0px_10px_rgba(0,0,0,0.3)] my-5 m-auto'>
        <p>{ task && task?.description}</p>
        <span>{task?.status}</span>
    </div>
  )
}

export default TaskBar