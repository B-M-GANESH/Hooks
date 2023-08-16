import React from 'react'

const Product = ({name,AddCart}) => {
    console.log(`${name} rendered`)
  return (
    <div  style={{border:"2px solid",display:"flex",gap:"10px",margin:"0 10px"}}>
        <h3>{name}</h3>
        <button onClick={AddCart}>Add cart</button>
    </div>
  )
}

export default React.memo(Product)