import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../redux/features/counter/counterSlice';

export default function ReduxCounter() {
  
  // Action to increment count
  const dispstch = useDispatch();

  // Action creator for incrementing
  const handelIncrement =()=>{
    dispstch(increment())
  }

  return (
    <div>
        0
        <button>Increment</button>
        <button>Decrement</button>
    </div>
  )
}