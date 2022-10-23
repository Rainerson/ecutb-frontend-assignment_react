import React from 'react'
import Logo from '../assets/images/logo.svg'
import MagnifyingIcon from '../assets/images/magnifying-icon.svg'
import ArrowsIcon from '../assets/images/arrows-icon.svg'
import HeartIcon from '../assets/images/heart-icon.svg'
import BagIcon from '../assets/images/bag-icon.svg'

const Navbar = () => {
    return (
        <nav className="navigation">
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt='Logo'/>
                </div>
                <div className="nav-links">
                    <a href="/html-files/index.html" className="active-link m-3">Home</a>
                    <a href="#" className="m-3">Categories</a>
                    <a href="#" className="m-3">Products</a>
                    <a href="/html-files/contact.html" className="m-3">Contact</a>
                </div>
                <div className="nav-icons">
                    <a href="#"><img className="svg-icon" src={MagnifyingIcon} alt='magnifying icon'/></a>
                    <a href="#"><img className="svg-icon" src={ArrowsIcon} alt='arrows icon'/></a>
                    <a href="#"><img className="svg-icon" src={HeartIcon} alt='heart-icon'/>
                        <span className="position-absolute top--50 start-50 badge rounded-pill bg-theme"> 4 </span>
                    </a>
                    <a href="#"><img className="svg-icon" src={BagIcon} alt='bag icon'/>
                        <span className="position-absolute top--50 start-50 badge rounded-pill bg-theme"> 1 </span>
                    </a>
                </div>
            </div>
        </nav>
    )
}

// Gör så att filen är exporterbar så att vi kan använda den på fler ställen
export default Navbar