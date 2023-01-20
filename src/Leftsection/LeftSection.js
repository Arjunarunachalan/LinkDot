import React from 'react'
import "./LeftSection.css"
import {FaHome} from 'react-icons/fa'

function LeftSection() {
  return (
    <div className='outer'>
        <h3 className='Explore'>#Explore</h3>

        <h2 className='Home'><FaHome/>Home</h2>
    </div>
  )
}

export default LeftSection