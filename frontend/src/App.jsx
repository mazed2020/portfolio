import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import Project from './page/Project'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/project' element={<Project/>}/>
      </Routes>
    
    </BrowserRouter>
    
  )
}

export default App
