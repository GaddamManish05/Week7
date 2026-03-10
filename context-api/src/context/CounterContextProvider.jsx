import React,{useState} from 'react'
import {CounterContext} from './CounterContext.js'

function CounterContextProvider({children}) {
    const [counter1,setCounter1] = useState(10);
    const changeCounter1 = () => {
        setCounter1(counter1 + 1);
    }

  return (
    <div>
        <CounterContext.Provider value={{counter1,changeCounter1}}>
            {children}
        </CounterContext.Provider>
    </div>
  )
}

export default CounterContextProvider