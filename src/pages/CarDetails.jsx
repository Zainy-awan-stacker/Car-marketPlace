import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import Details from '../data/detail';
import { useParams } from 'react-router-dom';
import cars from '../data/Cars';
function CarDetails() {
  return (
     <section className='bg-primary p-5'>
     {/* ye nichy jo div ha ye main div ha  */}
      <div className='main-div  grid lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 p-5'>
      {/* ye left side vali div ha  */}
      <div className='left-side flex-5'>
      
        <div>
         <CiLocationOn />
         <p></p>
        </div>
       
      </div>
      {/* ye right side vali div ha  */}
      <div className='right-side flex-4'>
       <div>
        
       </div>
      </div>
      </div>
      
    </section>
  )
}

export default CarDetails