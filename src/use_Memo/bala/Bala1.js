import React, { useMemo, useState } from 'react'
import Bala2 from './Bala2';

const Bala1 = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    function Factorial(n){
        console.log("main rendered");
        let result =1
        if(n<=1){
        return result
        }
        else{
        for(let i=n;i>=1;i--){
        result = result*i
        }
        return result
        }
    }
    function updateNumber(e){
      setNumber(e.target.value)
    }
    use
    const res = useMemo(() => Factorial(number), [number])
    // const res =Factorial(number)
  return (
    <div>
        <p>counter is {count}</p>
        <button onClick={()=>setCount(count+1)}>add</button>
        <hr />
        <input type='text' onChange={(e)=>setName(e.target.value)} />
        <p>Name is :{name}</p>
        <hr />
        {/* <input type='text' onChange={(e)=>{setNumber(e.target.value)}} />
        <br /><br />
        <p>Value is :{res}</p> */}
        <Bala2 res={res} updateNumber={updateNumber}/>
        
        
    </div>
  )
}

export default Bala1