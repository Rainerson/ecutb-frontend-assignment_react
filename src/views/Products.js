import React, { useContext } from 'react'
import Breadcrumb from '../sections/Breadcrumb'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'
import ProductGrid from '../sections/ProductGrid'
import { ProductContext } from '../contexts/contexts'

function Products() {

  const productContext = useContext(ProductContext)

  return (
    <>
    <Navbar></Navbar>
    <Breadcrumb currentPage='Products'></Breadcrumb>
    <ProductGrid title="Products"  items={productContext.allProducts}></ProductGrid>
    <Footer></Footer>
    </>
  )
}

export default Products