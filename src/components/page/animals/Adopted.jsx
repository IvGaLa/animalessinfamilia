import React, { useContext } from 'react'
import Contexto from '../../contexts/Contexto'

function Adopted() {

  const { data } = useContext(Contexto)

  return (
    <div>
      <h2 className={data.estilos.h2}>Adoptado!</h2>
      <p className={data.estilos.p}>Parece ser que el animal que estás buscando ya no está en nuestras instalación ¡Ha sido adoptado!</p>
    </div>
  )
}

export default Adopted