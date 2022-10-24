import React from 'react'
import Logo from '../assets/images/logo.svg'
import NavIcon from './NavIcon'

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
                    <NavIcon link="/" icon="fa-regular fa-magnifying-glass"></NavIcon>
                    <NavIcon link="/" icon="fa-regular fa-repeat"></NavIcon>
                    <NavIcon link="/" icon="fa-regular fa-heart"></NavIcon>
                    <NavIcon link="/" icon="fa-regular fa-bag-shopping"></NavIcon>   
                </div>
            </div>
        </nav>
    )
}

// Gör så att filen är exporterbar så att vi kan använda den på fler ställen
export default Navbar