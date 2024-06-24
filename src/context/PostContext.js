import { createContext,useContext,useMemo,useState } from "react";
import { faker } from '@faker-js/faker';

//Create Context
const PostContext=createContext();

function createRandomPost(){
    return{
      title:`${faker.hacker.adjective()} ${faker.hacker.noun()}`,
      body:`${faker.hacker.phrase()}`
    }
  }

function PostProvider({children}) {
    const [searchQuery,setSearchQuery]=useState('')
    const [posts,setPosts]=useState(()=>
      Array.from({length:30},()=>createRandomPost())
    )
    
    
    const handleClear=()=>{
      setPosts([]);
    }
    
    function onAddPost(post){
       setPosts(((posts)=>[post,...posts]))
    }
    
    
    const searchPost=searchQuery.length > 0 ?
    posts.filter((post)=>
      `${post.title} ${post.body}`.toLowerCase().includes(searchQuery.toLowerCase())
    ) : posts
    



    const value=useMemo(()=>{
      return {
        posts:searchPost,
        onAddPost:onAddPost,
        createRandomPost,
        searchQuery,
        setSearchQuery,
        onClearPost:handleClear,
      }
    },[searchPost,searchQuery])


return(
   <PostContext.Provider value={value}>
   {children}
   </PostContext.Provider>
)
}

function usePost()
{
  const context=useContext(PostContext)
  return context;
}
export {PostProvider,usePost};
