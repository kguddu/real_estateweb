import React from 'react'
import './css/banner.css'
import Search from './Search'
import Image from '../assets/img/houses/house-banner.jpg'

const Banner = () => {
  return (
   <section >
    <div className='main'>
    <div className='rent-div'>
      <h2><span>Rent</span> Your Dream House</h2>
      <p>
      Great for entertaining: spacious, updated 2 bedroom,
       1 bathroom apartment in Lakeview, available May 1st. 
       Close to nightlife with private backyard. $2000.00/mo, $200.00 move-in fee. 
      The building is pet-friendly with heat included. 
      Close to nightlife with private backyard. $2000.00/mo, $200.00 move-in fee. 
      The building is pet-friendly with heat included. 
      Close to nightlife with private backyard. $2000.00/mo, $200.00 move-in fee. 
      The building is pet-friendly with heat included. 
      </p>
    </div>
    <div className='banner-img'>
      <img src={Image} alt= 'banner'/>
    </div>
    </div>
    <Search/>
   </section>
  )
}

export default Banner