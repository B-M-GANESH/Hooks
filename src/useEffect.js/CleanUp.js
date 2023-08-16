import React, { useState } from "react";
import CompA from "./CompA";
// import CompB from "./CompB";

function CleanUp(){
    const[toggle,setToggle]=useState(true)
    return(
        <div>
            <p>use effect with clean up</p>
            <button onClick={()=>{setToggle(!toggle)}}>show/hide</button>
            {toggle && <CompA />}
            {/* <CompB /> */}
        
        </div>
    )
}
export default CleanUp;