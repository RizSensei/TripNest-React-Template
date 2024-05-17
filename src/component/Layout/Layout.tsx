import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='font-poppins px-10 md:px-20 lg:px-32 h-full w-full'>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout