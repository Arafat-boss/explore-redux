import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/features/counter/counterSlice';

export default function ReduxCounter() {
  
  // Action to increment count
  const dispstch = useDispatch(); 

  const {count} = useSelector((state)=>state.counter)
  // console.log(count);

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
        <div>{count}</div>
        <button onClick={handelDecrement}>Decrement</button>
    </div>
  )
}