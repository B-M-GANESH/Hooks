import { useState } from "react";


function Form(){
    // const [name,setName]=useState("")
    // const [age,setAge]=useState("")
    // const [email,setEmail]=useState("")

    const [inputs,setInputs]=useState({})   

    function formSubmit(e){
        e.preventDefault()
        console.log('submit form');
        console.log('current name:',inputs);

    }
    return<form onSubmit={formSubmit}>
    <label>Enter your Name:<input type="text" onChange={(x)=>{setInputs((previousState) =>{return{...previousState,name: x.target.value} })}} /></label><br />
    <label>Enter your Age:<input type="text" onChange={(x)=>{setInputs((previousState)=>{return{...previousState,age:x.target.value}})}} /></label><br />
    <label>Enter your Email:<input type="email" onChange={(x)=>{setInputs((previousState) =>{return{...previousState,email:x.target.value}})}} /></label><br />
    <input type="submit" value='submit form' />      
    </form>

}

export default Form;