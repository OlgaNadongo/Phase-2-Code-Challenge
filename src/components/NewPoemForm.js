import React, { useState } from "react";

function NewPoemForm() {

   const [poemData, setPoemData]= useState({
    title:"",
    content: "",
    author: ""
  })
  
  function handleChange(event){
    setPoemData({...poemData,[event.target.name]:event.target.value})
    console.log(poemData)
  }

  // function handleTitleChange(event){
  //   setPoemData({...poemData,title:event.target.value})
  // }


  return (
    <form className="new-poem-form">
      <input placeholder="Title" name="title" value={poemData.title} onChange={handleChange}/>
      <input placeholder="Author" name="author"  value={poemData.author}  onChange={handleChange}/>
      <textarea placeholder="Write your masterpiece here..." rows={10} name="content" value={poemData.content} onChange={handleChange}/>
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
