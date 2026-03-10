import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TaskList from "./TaskList";
import TaskBar from "./TaskBar";
function Task() {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetchTasks();
    },[tasks])

    const fetchTasks = async () => {
    try {
        let res = await fetch('http://localhost:3000/todo-api/get-tasks');

        if(!res.ok){
            throw new Error("Failed to fetch tasks");
        }

        let data = await res.json();
        console.log(data);
        setTasks(data?.payload || []);

} catch(err){

    setError(err.message);

}

};


    const onCreateTask = async (data) => {

        setLoading(true);
        setError(null);
    try {
        let res = await fetch('http://localhost:3000/todo-api/add-task', {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if(!res.ok){
            throw new Error("Failed to Fetch tasks");
        }

        let newData = await res.json();

        setTasks(prev => [...prev, newData.payload]);
        reset(); // clear form
    } catch (err) {

        setError(err.message);

    } finally {

        setLoading(false);

    }

};

    if (loading === true) {
        return (
            <p className="text-2xl text-center text-red-300 p-1.5 shadow-[0px_4px_0px_rgba(0,0,0,0.2)] rounded-2xl">
            Loading....
            </p>
    );
    }

    if (error !== null) {
        return (
        <p className="text-2xl text-center text-red-300 p-1.5 shadow-[0px_4px_0px_rgba(0,0,0,0.2)] rounded-2xl">
            {error}
        </p>
    );
    }

return (
    <div>

        <div className="m-auto h-70 bg-yellow-200 shadow-[0px_4px_0px_rgba(0,0,0,0.2)] rounded-2xl w-150 py-3">

        <form onSubmit={handleSubmit(onCreateTask)} className="mt-5">
            <div className="bg-purple-300 w-9/11 m-auto h-45 rounded-2xl mt-0.5 p-3">

            <label className="ml-5 text-xl">Add Task :</label>
            <textarea
                {...register("description", { required: true })}
                placeholder="Description..."
                className="ml-3 mt-3 w-10/12 border rounded-xl h-28 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

        </div>

        <button
            type="submit"
            disabled={loading}
            className="w-40 h-10 text-center bg-blue-300 shadow-[0px_4px_0px_rgba(0,0,0,0.2)] rounded-2xl relative left-51 top-2"
        >Add
        </button>
    </form>

    </div>
    <TaskList setTasks = {setTasks} tasks = {tasks} ></TaskList>

    </div>
);
}

export default Task;