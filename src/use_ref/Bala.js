import React, { useEffect } from 'react'
import { useRef } from 'react'

const Bala = () => {
    const paragraph = useRef()
    const color = ['#fc6b03','#70ff77','#5f57bd']
    const selectcolor = useRef()
    const selectedcolor ={current:null}
    useEffect(()=>{
        console.log(paragraph);
        console.log(paragraph.current);
    },[selectcolor])

    useEffect(()=>{
        console.log(paragraph);
        console.log(paragraph.current);
    },[selectedcolor])

    function Change(){
        const random =Math.floor(Math.random()*color.length)
        paragraph.current.style.color = color[random]

        selectcolor.current =color[random]
        console.log(selectcolor);

        selectedcolor.current =color[random]
        console.log("selected color:",selectedcolor);

    }
  return (
    <div>
        <p ref={paragraph}>Front end developer</p>
        <button onClick={Change}>color</button>
    </div>
  )
}

export default Bala