import React from "react";
import {Header} from "./container/header"
import {NotFound} from "./container/404"
import Homepage from "./page/homepage/homepage"
import Hobby from "./page/hobby/hobby"
import About from "./page/about/aboutMe"
import {Routes, Route,}  from 'react-router-dom'
function App() {

  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Header/>}>
          <Route index element={<Homepage/>}/>
          <Route path='hobby' element={<Hobby/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Route>
        <Route path='about' element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
