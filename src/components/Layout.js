import React from 'react'
import SNavbar from './ui/navbar/Navbar'

import '../styles/index.scss'


const Layout = ({ children }) => {
  return (
    <>
      <SNavbar />
      <main>{children}</main>
    </>
  )
}

export default Layout