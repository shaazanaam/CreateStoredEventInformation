import React, { useState } from "react";

function App() {
  const [name, setState]=useState("");
  const [inputValue, setInputValue]=useState("");
  const [lName,setLname]=useState("")

  console.log (name)
  function handleSubmit(){
    setInputValue(" " +name +" "+ lName)
    event.preventDefault();
  }
  function handleChange(event) {
    setState(event.target.value);
   
    
  }
  function handleChangeLName(event) {
    setLname(event.target.value);
   
    
  }
  
  return (
    <div className="container">
      <h1>Hello {name} {lName}</h1>
      <form onSubmit={handleSubmit}>
        <input  onChange={handleChange} name="fName" placeholder="First Name" value={name} />
        <input onChange={handleChangeLName} name="lName" placeholder="Last Name"  value={lName} />
        <button type ="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
