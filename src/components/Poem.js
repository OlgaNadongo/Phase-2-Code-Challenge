import React, { useState } from "react";

function Poem({title ,content ,author}) {
  const[isRead, setIsRead]=useState(false)

  function handleClick(){
    setIsRead(!isRead)
  }
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button onClick={handleClick}>{isRead? "Mark as unread":"Mark as read"}</button>
    </div>
  );
}

export default Poem;
