import React from 'react'
import { useReducer } from 'react'

function Call(state,action){
    switch(action.type){
        case 'deposit':
            return state+action.payload
            case 'withdraw':
                return state-action.payload
                default:
                    return state
    }
}

const Reducer = () => {
    const Deposit=(amount)=>{
        dispatch({type:'deposit',payload:amount})
    }
    const Withdraw=(amount)=>{
        dispatch({type:'withdraw',payload:amount})
    }
    const [state, dispatch] = useReducer(Call,1000)
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>Deposit(500)}>increment</button>
        <button onClick={()=>Withdraw(500)}>increment</button>
    </div>
  )
}

export default Reducer