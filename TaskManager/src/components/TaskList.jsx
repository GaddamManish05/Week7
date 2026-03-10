import React from 'react'

function TaskList({ tasks }) {
  return (
    <div className="mt-8">

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Task List
      </h2>

      {tasks.length === 0 ? (
        <p className="text-blue-500 text-lg">
          No Tasks Found
        </p>
      ) : (

        <div className="space-y-3">

          {tasks.map((taskObj, index) => (

            <div
              key={index}
              className="bg-gray-100 border rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition"
            >
              {taskObj.task}
            </div>

          ))}

        </div>

      )}

    </div>
  )
}

export default TaskList