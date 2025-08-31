import React from 'react'
import Navber from './Navber'
import Footer from './Footer'
const Layout = (props) => {
  return (
    <div>
         <Navber/>
         {
            props.children
         }
        <Footer/>
      
    </div>
  )
}

export default Layout
