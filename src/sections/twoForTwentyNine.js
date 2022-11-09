import React, { useContext } from 'react'
import { ProductContext } from '../contexts/contexts'
import ProductGridSmall from './ProductGridSmall'
import imageSeven from '../assets/images/7.png'

function TwoForTwentynine() {

    const productContext = useContext(ProductContext)

    return (
        <>
            <section className="two-for-twenty">
                <div className="container">
                    <div className="two-for-div" style={{ backgroundImage: `url(${imageSeven})` }}>
                        <div className='discount-text'>
                            <h1>2 FOR USD $29</h1>
                            <button className="btn-light">FLASH SALE
                                <span className="corner-topLeft"></span>
                                <span className="corner-bottomRight"></span>
                            </button>
                        </div>
                    </div>
                    <div className="two-for-boxes">
                        <ProductGridSmall title="" items={productContext.fourProducts}></ProductGridSmall>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TwoForTwentynine