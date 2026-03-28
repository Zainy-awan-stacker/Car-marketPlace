import React from 'react'
import { Route,Routes, useLocation,} from 'react-router-dom'
import Header from './commonPages/Header'
import Home from './pages/Home'
import Listing from './pages/Listing'
import CarDetails from './pages/CarDetails'
import Contact from './pages/Contact'
import MyBooking from './pages/MyBooking'
import Blogs from './pages/Blogs'
import Footer from './commonPages/Footer'
import Item from './components/Item'
import Sidebar from './components/owner/Sidebar'
import Dashboard from './pages/owner/Dashboard'
import AddCar from './pages/owner/AddCar'
import ListCar from './pages/owner/ListCar'

function App() {
  // const location =useLocation()
  // const isOwnerPath = location.pathname.includes('owner')
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
      <Route path='/owner' element={<Sidebar/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/owner/add-car' element={<AddCar/>}/>
      <Route path='/owner/list-car' element={<ListCar/>}/>

    </Routes>
    <Footer/>
   </main>
  )
}

export default App