import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Plants() {
  const [plant, setPlant]=useState([]);
  useEffect(()=>{
    const getPlant=async()=>{
      try{
        const res = await axios.get("http://localhost:4001/plant");
        console.log(res.data);
        setPlant(res.data);

      } catch (error){
        console.log(error);

      }
    };
    getPlant();
  },[]);


  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
<div className='mt-28 items-center justify-center text-center'>
  <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-green-500'>Here! :)</span></h1>
  <p className='mt-12'>Proper plant care is a godsend in the gardening world. That moment when you realize exactly what your plants need is a much-needed epiphany. That’s why we set up our range of plant care products to meet all your plants’ needs. Shop from our exclusive range of plant care products for a happy, strong garden!</p>
 <Link to="/">
 <button className='bg-green-500 mt-6 px-4 py-2 rounded-md hover:bg-green-700 duration-300 '>Back</button>
 </Link>
</div>
<div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
  {
    plant.map((item)=>(
      <Cards key={item.id} item={item}/>
    ))

  }
</div>
    </div>
    
    </>
  )
}

export default Plants
