import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Header from './components/common/Header'
import Home from './pages/Home'
import Listing from './pages/Listing'
import CarDetails from './pages/CarDetails'
import Contact from './pages/Contact'
import MyBooking from './pages/MyBooking'
import Blogs from './pages/Blogs'
import Footer from './components/common/Footer'

function App() {
   
  
  return (
   <>
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
    
    </>
   
  )
}

export default App