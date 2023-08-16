import React, { useState,useEffect } from "react";
function CompB(){
    const[count,setCount]=useState(0)
   
    useEffect(() => {
        let timerId;
        console.log('effect B goes');
        if(count){
            timerId=setInterval(() => {
                console.log('get price');
            }, 2000);
        }

        return () => {
            console.log('clean up B here');
            clearInterval(timerId)
        };
    }, [count]);
    return(
        <div>
            <button onClick={()=>{setCount(count+1)}}>ADD</button>
            <p>Count is {count}</p>
        </div>
    )
}
export default CompB;