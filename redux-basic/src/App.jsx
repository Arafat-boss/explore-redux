import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import ReduxCounter from './components/ReduxCounter';

function App() {
  const [count, setCount] = useState(0)

  // Function to increment count
  const increment = () =>{
    setCount(count + 1);
  }

  // Function to increment count asynchronously after 5 seconds
  const asyncIncrement = () =>{
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 5000);
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

      {/* <Form></Form> */}
      <hr />
      <h1>Redux Toolkit</h1>
      <p>Using Redux Toolkit for state management</p>
      <div className="card">
       <ReduxCounter></ReduxCounter>
      </div>
    </>
  )
}

export default App
