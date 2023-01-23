import React ,{useState,useEffect,useContext}from 'react'
import {Menu} from '@headlessui/react'
import { HouseContext } from './HouseContext'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const PriceRangeDropdown= () => {
  const {price,setPrice,} = useContext(HouseContext);
  const [isOpen,setIsOpen]=useState(false);

  const prices=[
    {
      value:'Price range (any)',
    },
    {
      value:'100000 - 150000'
    },
    {
      value:'100000 - 150000'
    },
    {
      value:'150000 - 190000'
    },
    {
      value:'200000 - 250000'
    },
    {
      value:'300000 - 350000'
    },
    {
      value:'400000 - 420000'
    },
  ]

  return (
       <Menu as='div' className='dropdown relative'>
        <Menu.Button onClick ={()=>setIsOpen(!isOpen)}className='dropdown-btn'>
           <AttachMoneyIcon className='dropdown-icon-primary w-full text-left'/>
           <div>
              <div className='text-[12px] leading-light'>{price}</div>
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
               {prices.map((price,idx)=>{
                return(
                  <Menu.Item  key={idx} onClick={()=>setPrice(price.value)} className='cursor-pointer' as='li'>
                      {price.value}
                  </Menu.Item>
                )
               })}
          </Menu.Items>
       
       </Menu>
  )
}

export default PriceRangeDropdown;
