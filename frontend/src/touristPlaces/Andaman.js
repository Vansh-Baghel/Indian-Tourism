import React from 'react'
import CarouselComponent from '../components/CarouselComponent';
import tour from "../store/tour-slice"
import { useSelector } from 'react-redux'

const Andaman = () => {
  const tour = useSelector((state) => state.tour.tourInfo);
  console.log(tour);

  return (
    <div style={{marginTop: "10vh"}}>
      <div className='text-black'>HI</div>
      <CarouselComponent>
        
      </CarouselComponent>
    </div>
  )
}

export default Andaman;