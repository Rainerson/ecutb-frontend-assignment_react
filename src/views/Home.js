import React from 'react'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'
import ProductGrid from '../sections/ProductGrid'
import Showcase from '../sections/Showcase'


const Home = () => {

  window.top.document.title = 'Fixxo'


  return (
    <>
        <Navbar></Navbar>
        <Showcase></Showcase>
        <ProductGrid title="Featured Products"></ProductGrid>
        {/* <ProductGrid title="Top Products"></ProductGrid> */}
        <Footer></Footer>
    </>
  )
}

export default Home