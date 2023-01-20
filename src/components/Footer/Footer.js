import React from 'react'
import "./Footer.css"
import { FaInstagram,FaTwitter,FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <p className='footertext'>© 2022 All Rights Reserved. Design by linkDot.Art <span className='footericon' ><FaInstagram className='icon'/><FaTwitter className='icon'/><FaLinkedinIn className='icon'/></span> </p>
    </div>
  )
}

export default Footer