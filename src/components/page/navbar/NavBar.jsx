import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Contexto from '../../contexts/Contexto'

function NavBar() {

  // Creamos un array con los enlaces que queremos mostrar en el navbar
  const { data } = useContext(Contexto)

  return (
    <div className='fixed top-0 w-full px-4'>
      <header className="rounded-lg shadow bg-white">
        <div className="p-1 md:flex md:items-center md:justify-between">
          <span className="flex flex-row text-sm text-gray-800 sm:text-center items-center">
            <img src={`${data.config.dirs.logo}${data.config.logo}`} alt={data.config.title} />
            <NavLink className="align-middle hover:underline" to={data.config.rutas.root}>
              <span className="ml-3 text-xl">{data.config.title}</span>
            </NavLink>
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-800 sm:mt-0">
            {
              data.enlaces.map((enlace, index) => (
                (enlace.where.find(where => where === data.linkstypes.navbar)) &&
                <li key={index}>
                  <NavLink className="hover:underline me-4 md:me-6" to={enlace.to}>{enlace.text}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </header>
    </div>
  )
}

export default NavBar