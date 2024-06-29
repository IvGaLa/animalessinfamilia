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
    li_span: 'font-bold'
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
    email: "email@animalessinfamilia"
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