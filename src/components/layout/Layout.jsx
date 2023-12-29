import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

function Layout({children, showFooter = true }) {
  return (
    <div>
        <Navbar/>
        <div className="content bg-gradient-to-r from-gray-700 to-gray-900		">
            {children}
        </div>
      {showFooter &&  < Footer/>}
    </div>
  )
}

export default Layout