import React, { useCallback, useState } from 'react'
import Product from './Product'
import { useMemo } from 'react'

const Callback = () => {
  const [count,setCount]=useState(0)
  const [cart,setCart]=useState(0)
  const [product,setProduct]=useState(['product 1','product 2'])

  const AddCart=useCallback(()=>{
    return setCart(cart+1)
  },[cart])
  

  return (
    <div>
        <div style={{border:"2px solid",margin:"5px" }}>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Add+</button>
        </div>
          <h3>{`cart ${cart}`}</h3>
        <div style={{display:'flex',justifyContent:'center'}}>
            {
              product.map((p,i)=>
              <Product name={p} key={i} AddCart={AddCart}/>
              )
              }
        </div>
    </div>
  )
}

export default Callback