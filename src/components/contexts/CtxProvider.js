//import React, { useState } from "react"
import React from "react"
import Contexto from "./Contexto"

const CtxProvider = function ({ children }) {

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
    enlaces
  }


  return (
    <Contexto.Provider value={{ data }} >
      {children}
    </Contexto.Provider>
  )
}

export default CtxProvider