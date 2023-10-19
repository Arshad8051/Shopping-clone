import React, { useState } from 'react'
import { Route } from 'react-router-dom' 

import Navbar from './Component/Navbar/Navbar'
import  Header  from './Component/Header/Header'
import Category from './Component/Categoty/Category'
import Footer from './Component/Footer/Footer'
import { PageRoutes } from './Component/PageRoutes'
import SignUp from './Component/Signup/Signup'
import Login from './Component/Login/Login'
import Cart from './Component/Cart/Cart'
import Profile from './Component/Profile/Profile'
function App() {
  const [globlefilter,setglobalfilter]=useState([])
  const [type,settype]=useState("")
  return(
    <div> 
      <Navbar/>
       <Header settype={settype}/> 
     {/* <Login/> */}
    
      <PageRoutes/> 
      <Footer/>
      
      
    </div>
  )

  
}

export default App
