import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Shop from './Shop'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    
    <div className="App">
    <Navbar/>
       <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/shop' element={<Shop/>}/>     
    </Routes>
    </div>
    
    
  )
}

export default App
