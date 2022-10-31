import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'


function ProductGrid({title, products}) {


    return (
        <>

            <section className="product-grid">
                <div className="container">
                    <h2>{title}</h2>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {
                            products.map(product => <ProductCard key={product.id} item={product} />)
                        }
                        

                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductGrid