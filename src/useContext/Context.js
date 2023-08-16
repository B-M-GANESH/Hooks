import React, { createContext,useContext, useState } from 'react'
import Component1 from './Component1'

const ganesh = createContext()

export function Bala(){
  return useContext(ganesh)
}
export default function Context(){
  const[user,setUser]=useState('React')
  
  return (
    <ganesh.Provider value={user}>
      <h1>Parent component</h1>
      <Component1/>
    </ganesh.Provider>
  )
}


