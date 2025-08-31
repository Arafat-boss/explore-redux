import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Function to increment count
  const increment = () =>{
    setCount(count + 1);
  }

  // Function to increment count asynchronously after 1 second
  const asyncIncrement = () =>{
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }

  return (
    <>
    
      <h1>Redux State Management</h1>
      <p>Function to increment count asynchronously after 1 second</p>
      <div className="card">
        <p>{count}</p>
        <button onClick={increment}>
          Increment
        </button>
        <button onClick={asyncIncrement}>
          Async
        </button>
        <br />
         <br />
        <button onClick={() => setCount((count) => count - 1)}>
           Dicresh
        </button>
      </div>
    </>
  )
}

export default App
