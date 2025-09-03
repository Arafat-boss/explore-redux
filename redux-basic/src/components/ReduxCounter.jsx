import { decrement, increment } from '../redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../redux/hook';

export default function ReduxCounter() {
  
  // Action to increment count
  const dispatch = useAppDispatch(); 

  // Accessing the current count from the Redux store
  const {count} = useAppSelector((state)=>state.counter)
 

  // Action creator for incrementing
  const handelIncrement =()=>{
    dispatch(increment())
  }
  // Action creator for decrementing
  const handelDecrement =()=>{
    dispatch(decrement())
  }

  return (
    <div>
       
        <button onClick={handelIncrement}>Increment</button>
        <div>{count}</div>
        <button onClick={handelDecrement}>Decrement</button>
    </div>
  )
}