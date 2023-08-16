import React, { useEffect } from 'react'

const Bala2 = ({res,updateNumber}) => {
    
        console.log("child rendered")
    
    return (
    <div>
        <input type='text' onChange={updateNumber}/>
        <br /><br />
        <p>Value is {res}</p>
    </div>
  )
}

export default React.memo(Bala2)