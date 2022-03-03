import React from 'react';
import './App.css';
import Header from './Header.js';
import TinderCard from './TinderCards';
import SwipeButtons from './SwipeButtons';
function App(){
  return(
    <div className='app'>
    <Header />
    <TinderCard />
    <SwipeButtons />

    </div>
    
  
  )

}


export default App;
