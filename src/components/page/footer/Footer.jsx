import React, { useContext } from 'react'
import Contexto from '../../contexts/Contexto'
import { NavLink } from 'react-router-dom'

function Footer() {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  const { data } = useContext(Contexto)
  const enlaces = data.enlaces
  const config = data.config
  const linkstypes = data.linkstypes


  return (
    <div className='absolute bottom-0 w-full px-4'>
      <footer className="rounded-lg shadow mb-1 bg-gradient-to-r from-green-100 to-green-300 hover:bg-gradient-to-l hover:from-gren-100 hover:to-green-300">
        <div className="p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-800 sm:text-center dark:text-gray-400">© {currentYear} <a href="/" className="hover:underline">{config.title}</a>
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-800 sm:mt-0">
            {
              enlaces.map((enlace, index) => (
                (enlace.where.find(where => where === linkstypes.footer)) ?
                  <li key={index}>
                    <NavLink className="hover:underline me-4 md:me-6" to={enlace.to}>{enlace.text}</NavLink>
                  </li>
                  : null
              ))
            }
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
