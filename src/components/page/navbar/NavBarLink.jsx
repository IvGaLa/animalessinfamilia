import React from 'react'
import { NavLink } from 'react-router-dom'

// Genera un enlace con la información que se le pase
function NavBarLink({ children, to, cName }) {
  return (
    <NavLink className={cName} to={to}>
      {children}
    </NavLink>
  )
}

export default NavBarLink
