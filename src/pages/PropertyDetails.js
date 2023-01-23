import React from 'react'

import {housesData} from '../data'
import { useParams } from 'react-router-dom'
import './propertydetails.css'

import BedIcon from '@mui/icons-material/Bed';
import  BathtubIcon from '@mui/icons-material/Bathtub';
import Crop54Icon from '@mui/icons-material/Crop54';
import { Link } from 'react-router-dom';



const PropertyDetails = () => {
  // get the house id
  const {id}=useParams();
  
  // get the house based on the id
  const house= housesData.find((house)=>{
    return house.id === parseInt(id);
  })
 

  return <section >
   
   
    <div className='details'>
      <h2>{house.name}</h2>
      <h3>{house.address}</h3>
      <h2 className='house_type'>{house.type}</h2>
      <h2 className='country'>{house.country}</h2>
      <h2 className='price'>${house.price}</h2>
    </div>
    <div className='details_container'>
      <div className='left'>
      <img src={house.imageLg} alt='detail'/>  
      </div>
      <div className='right'>
           <div className='agent_detail'>
           <img  className= "agent"src={house.agent.image} alt='agent' />
           <div>
           <h2>{house.agent.name}</h2>
          <Link to=''>View Listing </Link>
          </div>
          </div>
         <div >
         <div className='icons'>
              <BedIcon/>
              <div>{house.bedrooms}</div>
            </div>
            <div className='icons'>
              <Crop54Icon/>
              <div>{house.surface}</div>
            </div>
             <div className='icons'>
                < BathtubIcon/>
              <div>{house.bathrooms}</div>
            </div>
         </div>
         <div>
           <p>{house.description}</p>
         </div>
         
      </div>
    </div>
   </section>
  
}

export default PropertyDetails