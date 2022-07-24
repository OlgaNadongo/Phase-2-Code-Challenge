import React, { useState } from "react";

function NewPoemForm({addPoem}) {

   const [poemData, setPoemData]= useState({
    title:"",
    content: "",
    author: ""
  })
  
  function handleChange(event){
    setPoemData({...poemData,[event.target.name]:event.target.value})
    //console.log(poemData)
  }

  // function handleTitleChange(event){
  //   setPoemData({...poemData,title:event.target.value})
  // }
  function handleSubmitForm(event)
  {
     event.preventDefault()  

      fetch("http://localhost:8004/poems",
      {method:"POST",
      headers:
      {"Content-Type":"Application/json",
      "Accept":"Application/json"},
      body:JSON.stringify(poemData)
       })
      .then(r=>r.json())

      .then(data=>{

        //console.log(data)
        setPoemData( {
          title:"",
          content: "",
          author: ""
        })

        addPoem(data)
      })
      .catch(error=>console.log(error))
    
  }
    

  return (
    <form className="new-poem-form" onSubmit={handleSubmitForm}>
      <input placeholder="Title" name="title" value={poemData.title} onChange={handleChange}/>
      <input placeholder="Author" name="author"  value={poemData.author}  onChange={handleChange}/>
      <textarea placeholder="Write your masterpiece here..." rows={10} name="content" value={poemData.content} onChange={handleChange}/>
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
