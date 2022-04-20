import React from "react";
import Header from "./assets/container/header"
import Homepage from "./assets/page/homepage"
import Hobby from "./assets/page/hobby"
import {Routes, Route,Link}  from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/hobby' element={<Hobby/>}/>
      </Routes>
    </div>
  );
}

export default App;
