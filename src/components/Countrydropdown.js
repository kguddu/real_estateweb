import React ,{useState,useEffect,useContext}from 'react'
import {Menu} from '@headlessui/react'
import { HouseContext } from './HouseContext'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Countrydropdown = () => {
  const {country,setCountry,countries} = useContext(HouseContext);
  const [isOpen,setIsOpen]=useState(false);

  return (
       <Menu as='div' >
        <Menu.Button onClick ={()=>setIsOpen(!isOpen)}className='dropdown-btn'>
           <FmdGoodIcon className='dropdown-icon-primary '/>
           <div>
              <div>{country}</div>
              {/* <div className='text-[12px]  '>Select your place</div> */}
              {
                isOpen ?(
                    <ExpandLessIcon className='dropdown-icon-secondary'/>
                ):(
                   < ExpandMoreIcon className='dropdown-icon-secondary'/> 
                )
              }
           </div>

        </Menu.Button>
        
          <Menu.Items className='dropdown-menu'>
               {countries.map((country,idx)=>{
                return(
                  <Menu.Item  key={idx} onClick={()=>setCountry(country)} className='cursor-pointer' as='li'>
                      {country}
                  </Menu.Item>
                )
               })}
          </Menu.Items>
       
       </Menu>
  )
}

export default Countrydropdown