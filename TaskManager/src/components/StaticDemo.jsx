import { useState } from "react"

function StaticDemo() {

    let [counter, setCounter] = useState(10)
    let [marks, setMarks] = useState([1, 2])
    let [users, setUsers] = useState({ uid: 101,age : 21 })

    // Counter functions
    const Increment = () => {
        setCounter(prev => prev + 1)
    }

    const Decrement = () => {
        setCounter(prev => prev - 1)
    }

    const Reset = () => {
        setCounter(0)
    }

    // Add marks
    const addMarks = () => {
        setMarks(prevMarks => [...prevMarks, 123])
    }

    const addMarksAtEnd = () => {
        setMarks(prevMarks => [123,...prevMarks])
    }

    const addMarksInBetween = () => {
        const index = 2;
        const newValue = 34;
        setMarks(prev => [
        ...prev.slice(0, index),
        newValue,
        ...prev.slice(index)
    ])
    }

    const deleteProperty = () => {
        setUsers(prevUser => {
            const newUser = {...prevUser}
            delete newUser.age
            return newUser
        })
    }

    const deleteLast = () => {
        setMarks(prev => prev.slice(0, -1))
    }
    // Update user object
    const updateUser = () => {
        setUsers(prevUser => ({
            ...prevUser,
            city : "wgl"
        }))
    }




    return (
        <div className="text-center p-10">
            
            <h2 className="text-xl font-bold mb-4">Counter Section</h2>
            <p>Counter : {counter}</p>

            <button onClick={Increment} className="bg-amber-200 p-3 m-2">Increment</button>
            <button onClick={Decrement} className="bg-amber-200 p-3 m-2">Decrement</button>
            <button onClick={Reset} className="bg-amber-200 p-3 m-2">Reset</button>


            <h2 className="text-xl font-bold mb-4">Marks Section</h2>
            <p>Marks : {marks}</p>

            <button onClick={addMarks} className="bg-green-200 p-3 m-2">Add Marks</button>
            <button onClick={addMarksAtEnd} className="bg-green-200 p-3 m-2">Add Marks at End</button>
            <button onClick={deleteLast} className="bg-green-200 p-3 m-2">Delete MArks</button>
            <button onClick={addMarksInBetween} className="bg-green-200 p-3 m-2">Add Marks B/W</button>
            <h2 className="text-xl font-bold mb-4">User Section</h2>
            {
                Object.entries(users).map((v,index) => <p key={index}>{v}</p>)
            }
            <button onClick={updateUser} className="bg-blue-200 p-3 m-2">Update Property</button>
            <button onClick={() => deleteProperty()} className="bg-blue-200 p-3 m-2">Delete Property</button>

        </div>
    )
}

export default StaticDemo