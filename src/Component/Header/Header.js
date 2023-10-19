import React from 'react'
import './Header.css';
export default function Header({settype}) {
  return (
    <div className='dropdown'>
       <div className="dropdown-content">
    <a href="" onClick={()=>{settype('Female')}}>Women Ethnic  </a>
    <a href="https://www.meesho.com/accessories-men/pl/3tp">Men  </a>
    <a href="https://www.meesho.com/rompers/pl/3l4">kids  </a>
    <a href="#">Home & Kitchen </a>
    <a href="#">Jewellery & Accessories </a>
    <a href="#">Bags & Footwear
  </a>
  <a href="#">Electronic
  </a>
  </div>
    </div>
  )
}

