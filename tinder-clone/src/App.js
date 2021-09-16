import React from "react";
import './App.css';
import Header from "./Header.js";
import TinderCards from "./TinderCards.js";
import SwipeButtons from "./SwipeButtons.js";


function App() {
  return (
  <div className="app">
  
  
  <Header/>
  {/*Header*/}
  {/* Tinder cards */}
  <TinderCards/>
  {/* Swipe buttons */}
  <SwipeButtons/>
  </div>
  );
  
}

export default App;
