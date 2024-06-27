import React from 'react'
import { NavLink } from 'react-router-dom'

// Genera un enlace con la información que se le pase
function FooterLink({ children, to }) {
  return (
    <NavLink className="hover:underline me-4 md:me-6" to={to}>
      {children}
    </NavLink>
  )
}

export default FooterLink
