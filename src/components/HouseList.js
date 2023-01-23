import React ,{useContext} from 'react'
import { HouseContext } from './HouseContext'
import { Link } from 'react-router-dom'
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

import House from './House'
import './css/houselist.css'

const HouseList = () => {
  const {houses,loading}=useContext(HouseContext)
  
  // if loading is true
  if(loading){
    return (<HourglassBottomIcon className=' loading'/>)
  }
  if(houses.length <1){
    return<div className='no_found'>Sorry No data found</div>
  }
  return (
   <section className='mb-20'>
  <div className='container mx-auto'>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
      {houses.map((house,idx)=>{
        return(
          <Link to={`/property/${house.id}`} key={idx}>
            <House house={house}/>
          </Link>
        )
      })}
    </div>
  </div>
   </section>
  )
}

export default HouseList