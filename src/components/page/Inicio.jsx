import React, { useContext } from 'react'
import Contexto from '../contexts/Contexto'

function Inicio() {

  const { data } = useContext(Contexto)

  return (
    <section className={data.estilos.section}>
      <h1 className={data.estilos.h1}>¡Bienvenidos a {data.config.title}!</h1>
      <p className={data.estilos.p}>En nuestra protectora, nos dedicamos con amor y compromiso a rescatar, cuidar y encontrar hogares permanentes para animales abandonados y maltratados. Creemos firmemente que cada mascota merece una segunda oportunidad y un hogar lleno de cariño.</p>

      <h2 className={data.estilos.h2}>Adoptar es salvar vidas</h2>
      <p className={data.estilos.p}>Al adoptar un animal, no solo le das una nueva oportunidad de ser feliz, sino que también ayudas a reducir el número de animales sin hogar y maltratados. Cada adopción nos permite rescatar a otro animal en necesidad. Optar por la adopción en lugar de la compra es un acto de compasión y responsabilidad.</p>

      <h2 className={data.estilos.h2}>Nuestro trabajo</h2>
      <p className={data.estilos.p}>Mantener una protectora de animales es una labor que requiere dedicación y recursos. Desde la atención veterinaria, la alimentación, el alojamiento y el entrenamiento, cada animal recibe el cuidado necesario para recuperarse y estar listo para encontrar una familia que lo quiera.</p>

      <h2 className={data.estilos.h2}>Cómo puedes ayudar</h2>
      <p className={data.estilos.p}>Además de adoptar, hay muchas formas en las que puedes contribuir a nuestra causa:</p>
      <ul className={data.estilos.ul}>
        <li><span className={data.estilos.li_span}>Voluntariado:</span> Dedica tu tiempo y habilidades para ayudar a nuestros animales.</li>
        <li><span className={data.estilos.li_span}>Donaciones:</span> Tus aportaciones económicas nos permiten seguir brindando cuidados y rescates.</li>
        <li><span className={data.estilos.li_span}>Difusión:</span> Comparte nuestra misión y los perfiles de los animales disponibles para adopción en tus redes sociales.</li>
      </ul>
      <p className={data.estilos.p}>¡Únete a nuestra familia y forma parte del cambio! Con tu ayuda, podemos seguir salvando vidas y creando historias felices.</p>

      <p className={data.estilos.p}>Gracias por visitar {data.config.title}. Juntos, podemos hacer una diferencia en la vida de estos animales maravillosos.</p>

      <h3 className={data.estilos.h3}>¡Adopta, no compres!</h3>

      <p className={data.estilos.p}>{data.config.title}</p>
      <p className={data.estilos.p}>{data.config.email}</p>
      <p className={data.estilos.p}>Redes sociales</p>
    </section>
  )
  /*
  return (
      <section className='py-16 px-10'>
        <h1 className='font-serif text-6xl m-5 text-center'>¡Bienvenidos a {data.config.title}!</h1>
        <p className='pl-5 pr-5 pb-3'>En nuestra protectora, nos dedicamos con amor y compromiso a rescatar, cuidar y encontrar hogares permanentes para animales abandonados y maltratados. Creemos firmemente que cada mascota merece una segunda oportunidad y un hogar lleno de cariño.</p>
  
        <h2 className='text-4xl italic m-3 pt-5'>Adoptar es salvar vidas</h2>
        <p className='pl-5 pr-5 pb-3'>Al adoptar un animal, no solo le das una nueva oportunidad de ser feliz, sino que también ayudas a reducir el número de animales sin hogar y maltratados. Cada adopción nos permite rescatar a otro animal en necesidad. Optar por la adopción en lugar de la compra es un acto de compasión y responsabilidad.</p>
  
        <h2 className='text-4xl italic m-3 pt-5'>Nuestro trabajo</h2>
        <p className='pl-5 pr-5 pb-3'>Mantener una protectora de animales es una labor que requiere dedicación y recursos. Desde la atención veterinaria, la alimentación, el alojamiento y el entrenamiento, cada animal recibe el cuidado necesario para recuperarse y estar listo para encontrar una familia que lo quiera.</p>
  
        <h2 className='text-4xl italic m-3 pt-5'>Cómo puedes ayudar</h2>
        <p className='pl-5 pr-5 pb-3'>Además de adoptar, hay muchas formas en las que puedes contribuir a nuestra causa:</p>
        <ul className='pl-12 mb-4'>
          <li><span className='font-bold'>Voluntariado:</span> Dedica tu tiempo y habilidades para ayudar a nuestros animales.</li>
          <li><span className='font-bold'>Donaciones:</span> Tus aportaciones económicas nos permiten seguir brindando cuidados y rescates.</li>
          <li><span className='font-bold'>Difusión:</span> Comparte nuestra misión y los perfiles de los animales disponibles para adopción en tus redes sociales.</li>
        </ul>
        <p className='pl-5 pr-5 pb-3'>¡Únete a nuestra familia y forma parte del cambio! Con tu ayuda, podemos seguir salvando vidas y creando historias felices.</p>
  
        <p className='pl-5 pr-5 pb-3'>Gracias por visitar {data.config.title}. Juntos, podemos hacer una diferencia en la vida de estos animales maravillosos.</p>
  
        <h3 className='text-2xl font-bold m-2 ml-6 pb-4'>¡Adopta, no compres!</h3>
  
        <p className='pl-5 pr-5 pb-3'>{data.config.title}</p>
        <p className='pl-5 pr-5 pb-3'>{data.config.email}</p>
        <p className='pl-5 pr-5 pb-3'>Redes sociales</p>
      </section>
    )
  */
}

export default Inicio
