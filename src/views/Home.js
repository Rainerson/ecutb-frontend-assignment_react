import React, { useContext } from 'react'
import { ProductContext } from '../contexts/contexts'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'
import Pamelas from '../sections/Pamelas'
import twoForTwentyNine from '../sections/twoForTwentyNine'
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
        <Pamelas></Pamelas>
        <twoForTwentyNine></twoForTwentyNine>
        <Footer></Footer>
    </>
  )
}

export default Home