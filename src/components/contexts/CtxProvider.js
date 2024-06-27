import React, { useState } from "react"
import Contexto from "./Contexto"

const CtxProvider = function ({ children }) {

  const links = [
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


  const [enlaces, setEnlaces] = useState(links)

  return (
    <Contexto.Provider value={{ enlaces, setEnlaces }} >
      {children}
    </Contexto.Provider>
  )
}

export default CtxProvider