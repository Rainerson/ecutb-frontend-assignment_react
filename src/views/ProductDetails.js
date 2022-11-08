import React from 'react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

  window.top.document.title = ' Product | Fixxo'

    const params  = useParams()
    console.log(params)
    
  return (
    <>
        <Navbar></Navbar>
        <div className='container'>
            <h1>{params.id}</h1>
        </div>
        <Footer></Footer>
    </>
  )
}

export default ProductDetails