import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import {ProductContext} from '../contexts/contexts'


function ProductGrid({title}) {

    const products = useContext(ProductContext)

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