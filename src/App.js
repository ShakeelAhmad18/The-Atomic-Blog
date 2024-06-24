import {PostProvider} from './context/PostContext'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Archive from './components/Archive';
import Footer from './components/Footer';
import {useEffect, useState } from 'react';


function App() {
  const [isFakeDark,setIsFakeDark]=useState(false)

  useEffect(function(){
    document.documentElement.classList.toggle("fake-dark-mode")
  },[isFakeDark])
  

  return (
    //Provide the vlaue to Context 

    <section className="App">
      <button onClick={() => setIsFakeDark(isFakeDark => !isFakeDark)} className='btn-fake-dark-mode'>
        {isFakeDark ? "☀️" : "🌙"}
      </button>
      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider >
    </section>
  );
}

export default App;
