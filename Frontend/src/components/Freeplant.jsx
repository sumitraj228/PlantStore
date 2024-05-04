import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
function Freeplant() {

  const [plant, setPlant]=useState([]);
  useEffect(()=>{
    const getPlant=async()=>{
      try{
        const res = await axios.get("http://localhost:4001/plant");
        
        const data= res.data.filter((data)=>data.category==="Free")
        console.log(data);
        setPlant(data);

      } catch (error){
        console.log(error);

      }
    };
    getPlant();
  },[]);


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
   <>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
   <div> <h1 className="font-semibold text-xl pb-2">Free Plants Available</h1>
    <p>avail these plants absolutely for free</p>
    </div>
  
   <div>
   <Slider {...settings}>
 {plant.map((item)=>(
    <Cards item={item} key={item.id}/>
 ))}
      </Slider>
  
   </div>
   </div>
   </>
  )
}

export default Freeplant
