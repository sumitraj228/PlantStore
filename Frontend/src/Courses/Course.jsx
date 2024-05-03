import React from 'react'
import Navbar from '../components/Navbar'
import Plants from '../components/Plants'
import Footer from '../components/Footer'

function Course() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Plants/>
    </div>
   
    <Footer/>
    
    </>
  )
}

export default Course
