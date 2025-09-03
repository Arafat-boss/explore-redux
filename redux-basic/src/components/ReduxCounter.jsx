import { decrement, increment } from '../redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../redux/hook';

export default function ReduxCounter() {
  
  // Action to increment count
  const dispatch = useAppDispatch(); 

  // Accessing the current count from the Redux store
  const {count} = useAppSelector((state)=>state.counter)
 

  // Action creator for incrementing
  const handelIncrement =(amount)=>{
    dispatch(increment(amount))
  }
  // Action creator for decrementing
  const handelDecrement =(amount)=>{
    dispatch(decrement(amount))
  }

  return (
    <div>
       
        <button onClick={()=>{handelIncrement(5)}}>Increment 5</button>
        <div>{count}</div>
        <button onClick={()=>handelDecrement(5)}>Decrement 5</button>
    </div>
  )
}