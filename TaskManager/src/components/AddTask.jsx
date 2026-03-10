import React from 'react'
import { useForm } from 'react-hook-form'

function AddTask({ addNewTask }) {

  const { register, handleSubmit, reset } = useForm()

  const onFormSubmit = (taskObj) => {
    addNewTask(taskObj)
    reset()
  }

  return (
    <div className="mb-8">

      <h3 className="text-xl font-semibold mb-4 text-gray-700">
        Add New Task
      </h3>

      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="flex gap-3 justify-center"
      >

        <input
          type="text"
          placeholder="Enter a task..."
          {...register("task", { required: true })}
          className="border rounded-lg px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add
        </button>

      </form>

    </div>
  )
}

export default AddTask