import React, { useContext } from 'react'
import { ProductContext } from '../contexts/contexts'
import ProductGridSmall from './ProductGridSmall'
import imageEight from '../assets/images/8.png'

function TwoForFortynine() {
    const productContext = useContext(ProductContext)

    return (
        <>
            <section className="two-for-forty">
                <div className="container">

                    <div className="two-for-boxes">
                        <ProductGridSmall title="" items={productContext.fourProducts}></ProductGridSmall>
                    </div>
                    <div className="two-for-div" style={{ backgroundImage: `url(${imageEight})`}}>
                        <div className='discount-text'>
                            <h1>2 FOR USD $29</h1>
                            <button className="btn-light">FLASH SALE
                                <span className="corner-topLeft"></span>
                                <span className="corner-bottomRight"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TwoForFortynine