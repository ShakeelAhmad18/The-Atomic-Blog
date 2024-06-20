import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { faker } from '@faker-js/faker';
import Main from './components/Main';
import Archive from './components/Archive';
import Footer from './components/Footer';

//

function createRandomPost(){
  return{
    title:`${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body:`${faker.hacker.phrase()}`
  }
}


function App() {
const [isFakeDark,setIsFakeDark]=useState(false)
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
) : posts;



useEffect(function(){
  document.documentElement.classList.toggle("fake-dark-mode")
},[isFakeDark])

  return (
    <section className="App">
     <button onClick={()=>setIsFakeDark(isFakeDark=>!isFakeDark)} className='btn-fake-dark-mode'>
       {isFakeDark ? "☀️" : "🌙"}
     </button>
     <Header posts={searchPost} searchQuery={searchQuery} setSearchQuery={setSearchQuery} onClearPost={handleClear} />
     <Main posts={searchPost} onAddPost={onAddPost}/>
      <Archive onAddPost={onAddPost}  createRandomPost={createRandomPost}/>
     <Footer/>
    </section>
  );
}

export default App;
