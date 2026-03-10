import React from 'react'
import GuessNumber from './components/GuessNumber'
const App = () => {
  return (
    <div>
      <div>
        <h1>Guess a Number</h1>
        <form action="">
          <input type="text" style = {{}} placeholder='Type a Number...' />
        </form>
      </div>
      <GuessNumber></GuessNumber></div>
  )
}

export default App