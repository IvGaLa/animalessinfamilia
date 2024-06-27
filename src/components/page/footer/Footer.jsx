import React, { useContext } from 'react'
import Contexto from '../../contexts/Contexto'
import FooterLink from './FooterLink'

//    <div className='fixed bottom-0 bg-green-500 w-full'>Footer</div>
function Footer() {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  const { enlaces } = useContext(Contexto)

  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-800 fixed bottom-0 w-screen">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currentYear} <a href="/" className="hover:underline">Animales sin familia</a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {
            enlaces.map((enlace, index) => (
              <li key={index}><FooterLink to={enlace.to}>{enlace.text}</FooterLink></li>
            ))
          }
        </ul>
      </div>
    </footer>

  )
}

export default Footer
