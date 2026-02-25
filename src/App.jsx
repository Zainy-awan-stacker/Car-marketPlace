import React from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import Header from './commonPages/Header'
import Home from './pages/Home'
import Listing from './pages/Listing'
import CarDetails from './pages/CarDetails'
import Contact from './pages/Contact'
import MyBooking from './pages/MyBooking'
import Blogs from './pages/Blogs'
import Footer from './commonPages/Footer'

function App() {
  return (
   <main>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/listing' element={<Listing/>}/>
      <Route path='/listing/:id' element={<CarDetails/>}/>
      <Route path='/blog' element={<Blogs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/my-bookings' element={<MyBooking/>}/>

    </Routes>
    <Footer/>
   </main>
  )
}

export default App