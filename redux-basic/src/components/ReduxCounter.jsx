import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/features/counter/counterSlice';

export default function ReduxCounter() {
  
  // Action to increment count
  const dispstch = useDispatch();

  // Action creator for incrementing
  const handelIncrement =()=>{
    dispstch(increment())
  }
  // Action creator for decrementing
  const handelDecrement =()=>{
    dispstch(decrement())
  }

  return (
    <div>
       
        <button onClick={handelIncrement}>Increment</button>
        <div></div>
        <button onClick={handelDecrement}>Decrement</button>
    </div>
  )
}