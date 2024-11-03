import React, { useState } from "react";

function App() {
  const [fullName, setFullName]=useState({
    fName: "",
    lName:"",
  });
 
  


 
function handleChange(event){
    const newValue = event.target.value;
    const inputName = event.target.name;
   
   setFullName(preValue=> {
    if(inputName==="fName"){
    return{
      fName:newValue,
      lName: preValue.lName
    }
   }  else if(inputName ==="lName"){
    return{
      fName:preValue.fName,
      lName: newValue,
    }
   }
  });

   
}
  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName} </h1>
      <form >
        <input  onChange={handleChange} name="fName" placeholder="First Name" 
         value={fullName.fName}
          />
        <input onChange={handleChange} name="lName" placeholder="Last Name" 
         value ={fullName.lName} 
         />
        <button type ="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
