import React from 'react'
import { NavLink } from 'react-router-dom'

function NavIcon(link, icon) {
  return (
    <NavLink className="nav-icon" to={link}>
      <i className={icon}></i>
    </NavLink>
  )
}

export default NavIcon