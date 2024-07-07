import React, { useContext } from 'react'
import Contexto from '../../contexts/Contexto'

function Adopted() {

  const { data } = useContext(Contexto)
  const adopted = data.config.imagesAdopted[Math.floor(Math.random() * data.config.imagesAdopted.length)]
  return (
    <section className={data.estilos.section}>
      <h1 className={data.estilos.h1}>¡Ha sido adoptado!</h1>
      <p className={data.estilos.p}>Parece ser que el animal que estás buscando ya no está en nuestras instalaciones.</p>
      <span className='flex justify-center'>
        <img className='rounded-3xl my-10 scale-90 hover:scale-110	hover:shadow-2xl hover:shadow-rose-500' src={`${data.config.dirs.adopted}${adopted}`} alt="Adopted!" />
      </span>
    </section>
  )
}

export default Adopted