import React, { useContext } from 'react'
import NavBarLink from './NavBarLink'
import { NavLink } from 'react-router-dom'
import Contexto from '../../contexts/Contexto'

function NavBar() {

  // Creamos un array con los enlaces que queremos mostrar en el navbar
  const { data } = useContext(Contexto)
  const enlaces = data.enlaces
  const config = data.config
  const linkstypes = data.linkstypes

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to={'/'}>
          <img src='/images/logo/64x64.png' alt={config.title} />
          <span className="ml-3 text-xl">{config.title}</span>
        </NavLink>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {
            enlaces.map((enlace, index) => (
              (enlace.where.find(where => where === linkstypes.navbar)) ? <NavBarLink key={index} cName="mr-5 hover:text-gray-900" to={enlace.to}>{enlace.text}</NavBarLink> : null
            ))
          }
        </nav>
      </div>
    </header>
  )

}

export default NavBar
