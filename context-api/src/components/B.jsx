import React,{useEffect,useRef} from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import { UserContext } from '../context/UserContext';
import {useTest} from '../store/TestStore.js'
function B() {
  let inputRef = useRef();
  let x = useTest(state => state.x);
  let incrementX = useTest(state => state.incrementX);
  let incrementByValue = useTest(state => state.incrementByValue);
  let user = useTest(state => state.user);
  let updateUserAge = useTest(state => state.updateUserAge);
  let updateUserName = useTest(state => state.updateUserName);
  // let {counter1,changeCounter1} = useContext(CounterContext);
  // let {users} = useContext(UserContext);

  useEffect(() => {
    inputRef.current.focus();
  },[])
    console.log('B')
  return (
    <div className='p-10 shadow-2xl flex flex-col'>
        <p>Component B</p>
        {/* <p>Counter : { counter1}</p> */}
        <p>X : {x}</p>
        <button onClick={incrementX} className='bg-green-400 p-2 mt-3'>Change X</button>
        <button onClick={() => incrementByValue(10)} className='bg-green-400 p-2 mt-3'>X + 10</button>
        {/* <button onClick={changeCounter1} className='bg-green-400 p-2 mt-3'>Change Counter</button> */}
        <button onClick={updateUserAge} className='bg-green-400 p-2 mt-3'>Change User Age</button>
        <button onClick={() => updateUserName("sriman")} className='bg-green-400 p-2 mt-3'>Change User Name</button>
      <div className='p-3'>
          <p>{user.name}</p>
          <p>{user.age}</p>
        </div>
        <input ref = {inputRef} type="text" className='my-5 border-2' />
    </div>
  )
}

export default B