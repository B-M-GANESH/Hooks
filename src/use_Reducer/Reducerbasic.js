import React from 'react'
import { useReducer } from 'react'
const initialState = 0;
function Reducer(state,action){
    if('increment'==action.type) return state+1
    if('decrement'==action.type) return state-1
}
const Reducerbasic = () => {
    const [state, dispatch] = useReducer(Reducer,initialState)
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:'increment'})}>inc</button>
        <button onClick={()=>dispatch({type:'decrement'})}>inc</button>
    </div>
  )
}

export default Reducerbasic