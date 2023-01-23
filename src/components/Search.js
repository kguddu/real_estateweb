import React,{useContext} from 'react'
import './css/search.css'
import Countrydropdown from './Countrydropdown'
import PropertyDropdown from './PropertyDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
import SearchIcon from '@mui/icons-material/Search';
import { HouseContext } from './HouseContext'

const Search = () => {
 const { handleClick} = useContext(HouseContext)
  return (
    <div className='search'>
      <Countrydropdown/>
      <PropertyDropdown/>
      <PriceRangeDropdown/>
      <button  onClick= {() => handleClick()} className='search-btn'>
       <SearchIcon />
      </button>
     
    </div>
  )
}

export default Search