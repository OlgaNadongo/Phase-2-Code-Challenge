import React,{useState} from "react";
import Poem from "./Poem";

function PoemsContainer({poems}) {

 const[selectCategory, setSelectCategory]=useState("All")

  function handleCategory(event){
    setSelectCategory(event.target.value)
  }

  

  const filteredPoems=poems.filter(poem=>{
    if(selectCategory==="All") return true;

    return poem.isFav=== true && selectCategory ==="favorite"
  })

 
  return (
    <div className="poems-container">
       <select onChange={handleCategory}  value={selectCategory}>
          
          <option value="All">All Poems</option>
          <option value="favorite">Favorites</option>
       </select>
      {
        filteredPoems.map(poem=><Poem key={poem.id} id={poem.id} title={poem.title} content={poem.content} author={poem.author} fav={poem.isFav}/>
        )
      }
    </div>
  );
}

export default PoemsContainer;
