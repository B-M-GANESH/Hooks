import React from "react";
import { useEffect } from "react";

function CompA(){
    console.log('effect goes here');
    useEffect(() => {
        const timerId=setInterval(() => {
            console.log('API call executed');
        }, 2000);
        return () => {
            // cleanup
            console.log('clean up goes here');
            clearInterval(timerId)
        };
    }, []);

    return(
        <div>
            <p>component A</p>
        </div>
    )
}
export default CompA;