import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from './redux/Actions/Actions'
function App() {

  const dispatch=useDispatch()
  const state=useSelector(state=>state.counter.count)
  console.log();
const handle1=()=>{
dispatch(increment(10))
}
const handle2=()=>{
  dispatch(decrement(10))
}
  return (
    <div>
<button onClick={()=>handle1()}>Increment</button>
<h1>{state}</h1>
<button onClick={()=>handle2()}>decrement</button>

    </div>
  )
}

export default App