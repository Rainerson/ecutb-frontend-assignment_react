import React from 'react'
import brownBackground from '../assets/images/pamelas-brown.svg'
import greyBackground from '../assets/images/concious-grey.svg'

function Pamelas() {
    return (
        <>
            <section className="images-section">
                <div className="container">
                    <div className="brown-image">

                        <div className="brown-image-text">
                            <h1>Pamela Reif's</h1>
                            <h1>Top Picks</h1>
                            <button className="btn-dark">SHOP NOW
                                <span className="corner-topLeft"></span>
                                <span className="corner-bottomRight"></span>
                            </button>
                        </div>
                        <img src={brownBackground} alt='brown'></img>
                    </div>
                    <div className="grey-image">
                        <div className="grey-image-text">

                            <h1>Let's Be</h1>
                            <h1>Conscious</h1>
                            <button className="btn-light">FLASH SALE
                                <span className="corner-topLeft"></span>
                                <span className="corner-bottomRight"></span>
                            </button>
                        </div>

                        <img src={greyBackground} alt='grey'></img>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Pamelas