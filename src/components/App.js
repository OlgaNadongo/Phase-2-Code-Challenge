import React, { useState } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {

  const[isDisplay, setIsDisplay]=useState(true)

  function handleClick(){
    setIsDisplay(!isDisplay);
  }

  function addPoem(newPoem){
      console.log(newPoem)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleClick}>Show/hide new poem form</button>
        {isDisplay ? <NewPoemForm  addPoem={addPoem}/> : null}
      </div>
      <PoemsContainer />
    </div>
  );
}

export default App;
