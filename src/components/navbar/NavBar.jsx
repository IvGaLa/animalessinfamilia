import React from 'react'
import NavBarLink from './NavBarLink'

function NavBar() {

  // Creamos un array con los enlaces que queremos mostrar en el navbar
  const enlaces = [
    {
      text: "Inicio",
      to: "/"
    }, {
      text: "Animales",
      to: "/animales"
    }, {
      text: "Sobre nosotros",
      to: "/nosotros"
    }, {
      text: "Contacto",
      to: "/contacto"
    }
  ]


  return (
    <nav className="flex flex-row justify-between px-14 bg-yellow-300 items-center h-24">
      <h1 className="text-xl font-medium">Animales sin familia</h1>
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
