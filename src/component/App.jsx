import React,{ useState } from "react";

function App(){
   const [isMouse,setIsMouse]=useState(false);
   const [name,setName]=useState("");
   const [text,setText]=useState("");
   
   return(<div className="container">
      <h1>hello {text}</h1>
      <form onSubmit={(e)=>e.preventDefault()}>
      <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Enter Your Name"/>
      <button style={{backgroundColor:isMouse?"black":"white"}} 
      type="submit"
      onMouseOver={()=>setIsMouse(true)} 
      onMouseOut={()=>setIsMouse(false)}
      onClick={()=>setText(name)}>Submit</button>
      </form>
   </div>)
}

export default App;