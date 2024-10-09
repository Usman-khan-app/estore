import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contect from './pages/Contect'
import Gallery from './pages/Gallery'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './pages/Footer'
import ProductCard from './components/Card/Card'
export default function App() {
  return (
    <div>
      
      <Navbar/>

      <Routes>

      <Route exict path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contect' element={<Contect/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/product/:id' element={<ProductCard/>} />




      </Routes>
      <Footer />

      
    
  

    </div>
  )
}
