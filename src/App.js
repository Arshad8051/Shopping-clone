import React from 'react'
//import { Route } from 'react-router-dom' 

import Navbar from './Component/Navbar/Navbar'
import  Header  from './Component/Header/Header'
import Category from './Component/Categoty/Category'
import Footer from './Component/Footer/Footer'
import { PageRoutes } from './Component/PageRoutes'
//import Cart from './Component/Cart/Cart'
function App() {
  return(
    <div> 
      <Navbar/>
       <Header/> 
      
      <PageRoutes/> 
      <Footer/>
      
      
    </div>
  )

  
}

export default App
