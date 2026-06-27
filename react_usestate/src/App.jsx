import React, { useState } from 'react'

const App = () => {

const [count, setCount]=useState(0);
 
const [flag , setFlag] = useState(true);

console.log(count);

console.log(flag);

  return (
    <div>
      <h1>Count is : {count}</h1>
      <button onClick={()=>{
        setCount(count => count +1)
        setCount(count=>count+1)
      }}>
        Increment
      </button>
      <button onClick={()=>{
        setFlag(false);
      }}>
        Change state
        </button>
    </div>
  )
}

export default App
