import React from "react";
import {Header} from "./container/header"
import Homepage from "./page/homepage/homepage"
import Hobby from "./page/hobby"
import About from "./page/aboutMe"
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
