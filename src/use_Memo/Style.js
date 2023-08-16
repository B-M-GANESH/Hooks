import React, { useEffect } from "react";
function Style(props){
    const{result,factorial}=props

    useEffect(()=>{
        console.log('components re rendered');
    })
    return(
        <div>
            <p>factorial of the given number</p>
            <input type="text" name="fact" onChange={factorial} />
            <p>factorial of the number is {result} </p>
        </div>
    )
}

export default React.memo(Style);