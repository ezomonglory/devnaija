import React from 'react'
import Wat from "../assets/wat.gif"

function Watsaap() {
  return (
   <a href='https://wa.me/message/UW5CWNXP5AB7D1' target="blank" className='fixed bottom-4 right-4 z-50 rounded-full h-16 w-16 overflow-hidden'>     
      <img src={Wat}  />    
   </a> 
  )
}

export default Watsaap