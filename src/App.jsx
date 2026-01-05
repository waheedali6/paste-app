import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Routes} from "react-router" 
import Home from './components/home'
import Paste from './components/paste'

function App() {

  return (
    <>
    <BrowserRouter > 
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/paste' element={<Paste />} />
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
