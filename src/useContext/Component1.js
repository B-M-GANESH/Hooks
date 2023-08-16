import React from 'react'
import Component2 from './Component2'
import { Bala } from './Context'


const Component1 = () => {
    const bala = Bala()
  return (
    <div>
        <h1>Component1</h1>
        <h3>{`${bala} king Bala Guru`}</h3>
        <Component2/>
        

    </div>
  )
}

export default Component1