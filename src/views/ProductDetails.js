import React from 'react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const params  = useParams()
    console.log(params.productName)
    
  return (
    <>
        <Navbar></Navbar>
        <div className='container'>
            <h1>{params.productName}</h1>
        </div>
        <Footer></Footer>
    </>
  )
}

export default ProductDetails