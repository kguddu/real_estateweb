import React ,{useState,useEffect,useContext}from 'react'
import {Menu} from '@headlessui/react'
import { HouseContext } from './HouseContext'
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import './css/dropdown.css'

const PropertyDropdown= () => {
  const {property,setProperty,properties} = useContext(HouseContext);
  const [isOpen,setIsOpen]=useState(false);

  return (
       <Menu  as='div' className='dropdown'>
        <Menu.Button onClick ={()=>setIsOpen(!isOpen)}className='dropdown-btn'>
           <HomeWorkIcon className='dropdown-icon-primary '/>
           <div>
              <div className=''>{property}</div> 
             
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
               {properties.map((property,idx)=>{
                return(
                  <Menu.Item  key={idx} onClick={()=>setProperty(property)} className='cursor-pointer' as='li'>
                      {property}
                  </Menu.Item>
                  
                )
               })}
          </Menu.Items>
       
       </Menu>
  )
}

export default PropertyDropdown;