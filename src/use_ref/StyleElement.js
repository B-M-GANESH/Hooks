import { useRef,useEffect } from "react";

function StyleElement(){
    const paratext=useRef(null)
    const colors=['#53f4ea','#d92431','#d92431','#d92431','#bc0ab7']
    const selectedcolor=useRef(null)
    // const selectedcustomcolor={current:null}
    // console.log(paratext);
    useEffect(()=>{
        console.log(paratext);
        console.log(paratext.current);
        
    })
    useEffect(()=>{
        console.log("rendered");
    },[selectedcolor.current])
    
    function colorChange(){
        const randomcolor=Math.floor(Math.random()*colors.length)
        paratext.current.style.color=colors[randomcolor]
        
        selectedcolor.current=colors[randomcolor]
        console.log(selectedcolor.current);

        // selectedcustomcolor.current=colors[randomcolor]
        // console.log(selectedcustomcolor.current);
    }
        
    return(
        <div>
            <p ref={paratext}>react king bala</p>
            <button onClick={colorChange}>change color</button>
        </div>
    )
}

export default StyleElement;