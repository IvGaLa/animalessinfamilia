import React, { useContext } from 'react'
import NavBarLink from './NavBarLink'
import { NavLink } from 'react-router-dom'
import Contexto from '../../contexts/Contexto'

function NavBar() {

  // Creamos un array con los enlaces que queremos mostrar en el navbar
  const { enlaces } = useContext(Contexto)

  return (
    <nav className="flex flex-row justify-between px-14 bg-yellow-300 items-center h-24">
      <h1 className="text-xl font-medium"><NavLink to={'/'}>Animales sin familia</NavLink></h1>
      <ul className="flex flex-row gap-4 items-center text-[18px]">
        {
          enlaces.map((enlace, index) => (
            <li key={index}><NavBarLink to={enlace.to}>{enlace.text}</NavBarLink></li>
          ))
        }
        {
          /*<button className="bg-black text-white hover:bg-yellow-300 px-3 py-2 rounded-full border border-1 border-black hover:text-black duration-300 ease-in-out">
            Registrarse
          </button>*/
        }
      </ul>
    </nav>
  )
}

export default NavBar
