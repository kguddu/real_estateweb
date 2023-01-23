import React from 'react'
import './css/house.css'
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import Crop54Icon from '@mui/icons-material/Crop54';
const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } = house;
  return (

    <div className="grid">
      <div className="grid_item">
        <div className="card">
          <img className="img_card" src={image} alt='' />
        </div>
        <div className='house_details'>
          <button className='type_btn'>{type}</button>
          <button className='country-btn'>{country}</button>
        </div>
        <div className='addresss'>
          <h3>{address}</h3>
        </div>
        <div className='card_icons'>
          < BedIcon />
          <h3>{bedrooms}</h3>
          <BathtubIcon />
          <h3>{bathrooms}</h3>
          <Crop54Icon />
          <h3>{surface}</h3>
        </div>
        <div className='prices'>$ {price}</div>

      </div>
    </div>

  )
}

export default House