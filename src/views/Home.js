import React, { useContext } from 'react'
import { ProductContext } from '../contexts/contexts'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'
import ProductGrid from '../sections/ProductGrid'
import Showcase from '../sections/Showcase'


const Home = () => {

  window.top.document.title = 'Fixxo'

  const productContext = useContext(ProductContext)


  return (
    <>
        <Navbar></Navbar>
        <Showcase></Showcase>
        <ProductGrid title="Featured Products" items={productContext.featuredProducts}></ProductGrid>
        {/* <ProductGrid title="Top Products"></ProductGrid> */}
        <Footer></Footer>
    </>
  )
}

export default Home