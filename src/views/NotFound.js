import React from 'react'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'

function NotFound() {

  window.top.document.title = '404 | Fixxo'

  return (
    <>
      <Navbar></Navbar>
      <h1><p>404</p>- Page Not Found - </h1>
      <Footer></Footer>
    </>
  )
}

export default NotFound