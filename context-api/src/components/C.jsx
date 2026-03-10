import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import { UserContext } from '../context/UserContext';
import {useTest} from '../store/TestStore.js'
function C() {

  const y = useTest(state => state.y);
  const incrementY = useTest(state => state.incrementY);

  let {counter1,changeCounter1} = useContext(CounterContext);
  console.log('C')
  return (
    <div className='p-10 shadow-2xl flex flex-col'>
        <p>Component C</p>
        <p>Counter : {counter1}</p>
        <p>Y : {y}</p>
        <button onClick={incrementY} className='bg-green-400 p-2 mt-3'>Increment Y</button>
        <button onClick={changeCounter1} className='bg-green-400 p-2 mt-3'>Change Counter</button>

    </div>
  )
}

export default C