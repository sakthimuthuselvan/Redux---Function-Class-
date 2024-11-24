import React from 'react'
import { addFun, add5Increment,lessFun } from './Feature/BasicSlice'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const ovreall = useSelector((state)=> state.basic)
  console.log("val ",ovreall);
  
  return (
    <div>
      <h1>Learning Redux Toolkit</h1>
     <div>
      <h1> {ovreall.val}</h1>
     </div>

     <button onClick={()=> dispatch(addFun())}>Increment</button>
     <button onClick={()=> dispatch(lessFun())}>Decrement</button>
     <button onClick={()=> dispatch(add5Increment(5))}>Add 5</button>

    </div>
  )
}

export default App