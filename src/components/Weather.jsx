import React from 'react'
import './Weather.css'
import { FaMapLocationDot,FaSun } from "react-icons/fa6";
import GradientSunIcon from './GradientSunIcon';
const Weather = () => {
  return (
    <div className='weather'>
        <div className='search-bar'>
            <input type='text' placeholder='Search'/>
            <FaMapLocationDot class="custom-icon" />
        </div>
        <GradientSunIcon />
    </div>
  )
}

export default Weather