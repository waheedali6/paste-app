import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Routes} from "react-router" 
import Home from './components/Home.jsx'
import Paste from './components/Paste.jsx'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
    <Toaster position="top-right"/>
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
