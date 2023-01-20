import React from 'react'
import "./RightCard.css"

function RightCard() {
  return (
    <div className='cardouter'>
       <h3 className='subhead'>Create Your LinkDot Portfolio</h3>
       <p className='container '>Get exclusive access to top talents and apply for best Web3 oppurtunities based on your proof of work and verified credentials</p>
       <button className='cardbutton'>Connect Metamask</button>
       <p className='container'>By connecting your Wallet .you agree to our <a href="#">Terms of Service and privacy Policy</a></p>
    </div>
  )
}

export default RightCard