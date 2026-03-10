import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import { UserContext } from '../context/UserContext'
function A() {
  let {counter1,changeCounter1} = useContext(CounterContext)
  let {users,changeUser} = useContext(UserContext);
  console.log('A')
  return (
    <div className='p-10 shadow-2xl'>
        <p>Component A</p>
        <p>Counter : {counter1}</p>
        <button onClick={changeCounter1} className='bg-green-400 p-2 mt-3'>Change Counter</button>
        <div className='p-3'>
          <p>{users.name}</p>
          <p>{users.age}</p>
          <p>{users.city}</p>
          <p>{users.email}</p>
          <button onClick={changeUser} className='bg-green-400 p-2 mt-3'>Change User</button>
        </div>
    </div>
  )
}

export default A