import { useReducer } from "react";

function counterReducer(state,actions){
    switch (actions.type) {
        case "INCREMENT":
            return state+1
        case "DECREMENT":
            return state-1
        case "RESET":
            return state=0
        default:
           throw Error ("Invalid")
    }
}


function Reduce(){
    console.log("rendered");
   
    const [state, dispatch] = useReducer(counterReducer,5)
    return(
        <>
        <p>{state}</p>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>INC</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>DEC</button>
        <button onClick={()=>dispatch({type:"RESET"})}>RESET</button>
        </>
    )
}
export default Reduce;