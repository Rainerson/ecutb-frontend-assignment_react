import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'
import NavIcon from './NavIcon'

const Navbar = () => {
    return (
        <nav className="navigation">
            <div className="container">
                <div className="logo">
                    <NavLink  to="/" end>
                        <img src={Logo} alt='Logo'/>
                    </NavLink>
                    
                </div>
                <div className="nav-links">
                    <NavLink to="/" className="m-3" end>Home</NavLink>
                    <NavLink to="/categories" className="m-3" end>Categories</NavLink>
                    <NavLink to="/products" className="m-3" end>Products</NavLink>
                    <NavLink to="/contacts" className="m-3" end>Contact</NavLink>

                </div>
                <div className="nav-icon">
                    <NavIcon link="/search" icon="fa-regular fa-magnifying-glass"></NavIcon>
                    <NavIcon link="/compare" icon="fa-regular fa-repeat"></NavIcon>
                    <NavIcon link="/wishlist" icon="fa-regular fa-heart"></NavIcon>
                    <NavIcon link="/shoppingcart" icon="fa-regular fa-bag-shopping"></NavIcon>   
                </div>
            </div>
        </nav>
    )
}

// Gör så att filen är exporterbar så att vi kan använda den på fler ställen
export default Navbar