import React, {useEffect, useState } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {

  const[isDisplay, setIsDisplay]=useState(true)
  const[poems, setPoems]=useState([])

  useEffect(()=>{
    fetch("http://localhost:8004/poems")
    .then(r=>r.json())
    .then(data=>setPoems(data))
    .catch(error=>console.log(error))
  },[])

 

  function handleClick(){
    setIsDisplay(!isDisplay);
  }

  function addPoem(newPoem){
      //console.log(newPoem)
      setPoems([...poems, newPoem])
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleClick}>Show/hide new poem form</button>
        {isDisplay ? <NewPoemForm  addPoem={addPoem}/> : null}
      </div>
      <PoemsContainer poems={poems} />
    </div>
  );
}

export default App;
