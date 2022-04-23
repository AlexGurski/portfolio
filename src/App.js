import React from "react";
import {Header} from "./assets/container/header"
import Homepage from "./assets/page/homepage"
import Hobby from "./assets/page/hobby"
import About from "./assets/page/about"
import {Routes, Route,}  from 'react-router-dom'
function App() {

  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Header/>}>
          <Route index element={<Homepage/>}/>
          <Route path='hobby' element={<Hobby/>}/>
      </Route>
        <Route path='about' element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
