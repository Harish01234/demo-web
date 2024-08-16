import React from 'react'
import { Outlet, Route, Routes } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import Layout from './Layout'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'


const App = () => {
  return (
   <>

   
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={< About/>} />
      </Route>

    </Routes>
   
   </>
  )
}

export default App