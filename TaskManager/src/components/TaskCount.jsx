import React from 'react'

function TaskCount({ tasks }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 w-48 text-center m-auto">

      <h2 className="text-gray-600 text-lg mb-2">
        Task Count
      </h2>

      <p className="text-4xl font-bold text-blue-500">
        {tasks.length}
      </p>

    </div>
  )
}

export default TaskCount