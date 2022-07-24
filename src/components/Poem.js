import React, { useState } from "react";

function Poem({id,title ,content ,author, fav}) {
  const[isRead, setIsRead]=useState(false)
  const[isFav, setIsFav]=useState(fav)

  function handleClick(){
    setIsRead(!isRead)
  }

  function changeFav(){

    fetch(`http://localhost:8004/poems/${id}`,{
      method: "PATCH",
      headers:{
        "Content-Type":"Application/json",
        "Accept":"Application/json"
      },
      body: JSON.stringify({isFav:!isFav})
    }
    )
    
    .then(r=>r.json())
    .then(data=>setIsFav(!isFav))
    .catch(error=>console.log(error))
  }


  
  



  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button onClick={handleClick}>{isRead? "Mark as unread":"Mark as read"}</button>
      <button onClick={changeFav}>{isFav? "Remove from Fav":"Add to Fav" }</button>
    </div>
  );
}

export default Poem;
