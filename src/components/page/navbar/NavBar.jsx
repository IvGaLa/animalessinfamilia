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
    <nav className="flex flex-row justify-between px-14 bg-yellow-300 items-center h-24">
      <h1 className="text-xl font-medium"><NavLink to={'/'}>{config.title}</NavLink></h1>
      <ul className="flex flex-row gap-4 items-center text-[18px]">
        {
          enlaces.map((enlace, index) => (

            (enlace.where.find(where => where === linkstypes.navbar)) ? <li key={index}><NavBarLink to={enlace.to}>{enlace.text}</NavBarLink></li> : null

          ))
        }
      </ul>
    </nav>
  )
}

export default NavBar
