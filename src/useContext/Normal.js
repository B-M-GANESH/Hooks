import React, { createContext } from 'react'
import { useContext } from 'react'

const User = createContext()
export default function Normal(){
    const user = 'React'
  return (
    <User.Provider value={user}>
        <h1>Parent Component</h1>
        <Component1 />
    </User.Provider>
  )
}
function Component1(){
    return(
    <>
    <h3>Component1</h3>
    <Component2 />
    </>
    )
}
function Component2(){
    return(
    <>
    <h3>Component2</h3>
    <Component3 />
    </>
    )
}
function Component3(){
    const user = useContext(User)
    return(
    <>
    <h3>Component3</h3>
    <h3>{`${user} king bala`}</h3>
    </>
    )
}