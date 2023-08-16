import { useState,useMemo,useCallback } from "react";
import Style from "./Style";

function  Counter(){
    const[count,setCount]=useState(0)
    const[person,setPerson]=useState({})
    const[number,setNumber]=useState(6)

    function addItem(){
        for(let i=0;i<5;i++){
            setCount(e=>e+1)
        }
    }
    function factorial(e){
        console.log(" Inside factorial executed");
        let res=1
        if(e<=1){
        return res
        }
        else{
        for(let i=e;i>=1;i--){
        res=res*i
        }
        return res
    }
    }
    // const result=factorial(number)
    const result= useMemo(() => factorial(number), [number])
    //     function updateNumber(e){
    //     setNumber(e.target.value)
    // }
        const updateNumber=useCallback((e)=>{
            setNumber(e.target.value)
        },[number])

    return(
        <div>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <p>Current value of count is{count}</p>
            <button onClick={addItem}>ADD 5</button>
            <hr />
            <label>Firstname:<input type="text" name="firstname" onChange={(e)=>{setPerson({...person,firstname:e.target.value})}} /></label>
            <label>Lastname:<input type="text" name="lastname" onChange={(e)=>{setPerson({...person,lastname:e.target.value})}}/></label>
            <p>firstname:{person.firstname}</p>
            <p>lastname:{person.lastname}</p>
            <hr />
            {/* <p>the factorial if the given number</p>
            <label>Enter number:<input type="text" name="numbers" onChange={(e)=>{setNumber(e.target.value)}} /></label>
            <p>factorial of given number is:{result}</p> */}
            <Style result={result} factorial={updateNumber} />
        </div>
     )
}
export default Counter;