import React from 'react'
import { useReducer,useState } from 'react'
const initialState = [{id:Date.now(),name:'ganesh',email:'ganesh@gmail.com'}]
const reducer =(state,action) =>{
    switch (action.type) {
        case 'add':
            return [...state,action.payload]
        case 'delete':
            return state.filter(contact=>contact.id !== action.payload)
    }

}

const MainReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const addItem =(e)=>{
        e.preventDefault();
        setEmail('')
        setName('')
        const contact={
            id:Date.now(),name,email
        }
        dispatch({type:'add',payload:contact})
    }

    return (
    <div>
        <div>
        <input type='text' value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
        <input type='email' value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
        <br />
        <button onClick={addItem}>Add</button>
        </div>
        <div>
            <ul>{
                state.map(contact=>(
                    <li>
                        <h2>{contact.name}</h2>
                        <h2>{contact.email}</h2>
                        <button onClick={()=>dispatch({type:'delete',payload:contact.id})}>delete</button>
                    </li>
                ))
            
                }</ul>
        </div>
    </div>
    
  )
}

export default MainReducer