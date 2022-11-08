import React from 'react'
import Breadcrumb from '../sections/Breadcrumb'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'
import ProductGrid from '../sections/ProductGrid'

function Products() {
  return (
    <>
    <Navbar></Navbar>
    <Breadcrumb currentPage='Products'></Breadcrumb>
    <ProductGrid title="Products"></ProductGrid>
    <Footer></Footer>
    </>
  )
}

export default Products