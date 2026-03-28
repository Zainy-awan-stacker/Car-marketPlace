import React from 'react'
import { useState } from 'react'
import { Link,NavLink,Outlet,useNavigate } from 'react-router-dom'



function Sidebar() {
 const navigate = useNavigate()
 const [isOwner,setIsOwner] = useState(true)
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar