import { useState } from "react";

function Forms(){
    // const[name,setName]=useState("")
    // const[age,setAge]=useState("")
    // const[email,setEmail]=useState("")
    // console.log("current state",name);
    const[input,setInput]=useState({number:"+91",email:"@gmail.com",country:"india",about:"I am Student"})
    function formSubmit(e){
        e.preventDefault();
    console.log("form submitted");
    console.log("current state",input);
    }
    function handleChange(e){
        const name=e.target.name
        const value=e.target.value
        setInput((previousState)=>{return{...previousState,[name] : value}})
        // setInput((previousState)=>{return{...previousState,[name] : value}})

    }
    
    return<>
    <form onSubmit={formSubmit}>
    <label>Enter Your Name:<input type="text" name="name" onChange={handleChange}/></label><br /><br />
    <label>Enter Your Age:<input type="text" name="age" onChange={handleChange} /></label><br /><br />
    <label>Enter Your Email<input type="email" name="email" onChange={handleChange} value={input.email}/></label><br /><br />
    <label>Enter Your Ph.no<input type="text" name="number" onChange={handleChange} value={input.number} /></label><br /><br />
    <label>Select Your Country:
        <select name="country" onChange={handleChange} value={input.country}>
         <option value="">select</option>
         <option value="India">India</option>
         <option value="USA">USA</option>
         <option value="Australia">Australia</option>
        </select></label><br /><br />
        <label>About:<textarea name="about" onChange={handleChange} value={input.about}/></label><br /><br />
    <input type="submit" value='submit form'  />
    </form>
          </>
}
export default Forms;





