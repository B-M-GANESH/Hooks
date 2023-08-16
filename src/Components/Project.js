import { useState,useEffect } from "react";

function Project(){
    const[count,setCount]=useState(0)
    const[msg,setMsg]=useState('initial msg')
    useEffect(()=>{
        console.log("rendered");
        console.log("count value is",count);
        console.log(msg);
    },[count,msg])
  
    return<>
         <button onClick={()=>setCount(count+1)}>ADD</button>
         <p>I have render {count} times</p>
        <button onClick={()=>{setMsg('Message updated')}}>Msg update</button>
         </>
}
export default Project;