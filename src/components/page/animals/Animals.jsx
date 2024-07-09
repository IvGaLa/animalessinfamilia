import React, { useContext } from 'react'
//import AnimalGrid from './AnimalGrid'
import AnimalGridTurso from './AnimalGridTurso'
import Contexto from '../../contexts/Contexto'

function Animals() {

  const { data } = useContext(Contexto)

  return (
    <section className={data.estilos.section}>
      <h1 className={data.estilos.h1}>Adopciones en {data.config.title}</h1>

      <p className={data.estilos.p}>Cada uno de nuestros animales ha sido rescatado y cuidado con amor, esperando encontrar un hogar lleno de cariño. Al adoptar, no solo estás dando una nueva oportunidad a un animal necesitado, sino que también estás ganando un compañero fiel y amoroso.</p>

      <h2 className={data.estilos.h2}>Visítanos</h2>
      <p className={data.estilos.p}>Estamos aquí para ayudarte a encontrar el compañero perfecto. ¡Ven a conocernos y descubre cómo puedes hacer una diferencia!</p>

      <AnimalGridTurso />
    </section>
  )
}

export default Animals
