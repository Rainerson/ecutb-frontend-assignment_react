import React from 'react'
import NavIcon from '../components/NavIcon'

function Footer() {
  return (
    <footer>
        <div className="footer-socials">
            <NavIcon link="/fb" icon="fa-brands fa-facebook-f"></NavIcon>
            <NavIcon link="/insta" icon="fa-brands fa-instagram"></NavIcon>
            <NavIcon link="/twitter" icon="fa-brands fa-twitter"></NavIcon>
            <NavIcon link="/google" icon="fa-brands fa-google"></NavIcon>
            <NavIcon link="/linkedin" icon="fa-brands fa-linkedin"></NavIcon>
        </div>
        <p>@ 2022 Fixxo. All rights reserved</p>
    </footer>
  )
}

export default Footer