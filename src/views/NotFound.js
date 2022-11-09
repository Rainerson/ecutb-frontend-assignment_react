import React from 'react'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'

function NotFound() {

  window.top.document.title = '404 | Fixxo'

  return (
    <>
      <Navbar></Navbar>
      <center><h1>404 - NotFound</h1></center>
      <Footer></Footer>
    </>
    )
}

export default NotFound