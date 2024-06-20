import { useState } from "react"




function FormAddPosts({onAddPost}) {
    const [title,settitle]=useState('')
    const [body,setBody]=useState('')

  function  handleSubmit(e){
      e.preventDefault();

      if(!title || !body){
        return;
      }

      onAddPost({title,body})
      settitle('')
      setBody('')

  }


    return (
        <form onSubmit={handleSubmit}>
           <input value={title} onChange={(e)=>settitle(e.target.value)} placeholder="Title..." /> 
           <textarea value={body} onChange={(e)=>setBody(e.target.value)} placeholder="write text here..." />
            <button>Add Post</button>
        </form>
    )
}

export default FormAddPosts
