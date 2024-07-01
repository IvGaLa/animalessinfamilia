//import React, { useState } from "react"
import React from "react"
import Contexto from "./Contexto"

const CtxProvider = function ({ children }) {

  const estilos = {
    section: 'py-16 px-10',
    h1: 'font-serif text-6xl m-5 text-center',
    h2: 'text-4xl italic m-3 pt-5',
    h3: 'text-2xl font-bold m-2 ml-6 pb-4',
    p: 'pl-5 pr-5 pb-3',
    ul: 'pl-12',
    li_span: 'font-bold',
    pagination_button: 'relative h-10 max-h-[40px] w-10 max-w-[40px] select-none ml-1 rounded-3xl border-2 border-green-600 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-green-800 hover:text-gray-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
  }

  // Guarda el tipo de links para los diferentes menús
  const linkstypes = {
    navbar: "NavBar",
    footer: "Footer",
    sidebar: "SideBar"
  }

  // Guarda configuración general del sitio
  const config = {
    title: "Animales sin familia",
    description: "Animales sin familia es una protectora de animales para ayudar en la adopción.",
    email: "email@animalessinfamilia",
    logo: "64x64.png",
    dirs: {
      animals: "/images/animals/",
      animals_thumb: "/384x384/",
      logo: "/images/logo/",

    }
  }

  // Guarda los enlaces a mostrar en los diferentes menús
  const enlaces = [
    {
      where: [linkstypes.footer, linkstypes.navbar],
      text: "Inicio",
      to: "/"
    }, {
      where: [linkstypes.footer, linkstypes.navbar],
      text: "Animales",
      to: "/animales"
    }, {
      where: [linkstypes.footer],
      text: "Sobre nosotros",
      to: "/nosotros"
    }, {
      where: [linkstypes.navbar],
      text: "Contacto",
      to: "/contacto"
    }
  ]


  const data = {
    config,
    linkstypes,
    enlaces,
    estilos
  }


  return (
    <Contexto.Provider value={{ data }} >
      {children}
    </Contexto.Provider>
  )
}

export default CtxProvider