import React from 'react'
import { NavLink } from 'react-router-dom'

function NavIcon({link, icon, quantity}) {
  return (
    <NavLink className="nav-icon" to={link} end>
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{quantity}</span>
      <i className={icon}></i>
    </NavLink>
  )
}

export default NavIcon