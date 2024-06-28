import React, { useContext } from 'react'
import Contexto from '../contexts/Contexto'

function About() {
  const { data } = useContext(Contexto)

  return (
    <div className='m-4 pb-20'>
      <h1 className='font-serif text-5xl m-5 text-center'>Sobre Nosotros</h1>
      <h2 className='text-3xl m-3 pt-5'>Bienvenidos a {data.config.title}</h2>
      <p className='pl-5 pr-5 pb-3'>En {data.config.title}, nuestro objetivo es proporcionar un hogar temporal y cuidado integral a los animales abandonados y en situación de riesgo. Aunque este proyecto es ficticio y fue creado con fines educativos para el aprendizaje de ReactJS, nos esforzamos en ofrecer una experiencia informativa y educativa sobre lo que hacen las protectoras de animales y la importancia de la adopción responsable.</p>

      <h2 className='text-3xl m-3 pt-5'>Nuestra Misión</h2>
      <p className='pl-5 pr-5 pb-3'>La misión de {data.config.title} es rescatar, rehabilitar y reubicar a los animales que han sido abandonados, maltratados o que necesitan un hogar. Creemos firmemente en el derecho de cada animal a vivir una vida digna y llena de amor.</p>

      <h2 className='text-3xl m-3 pt-5'>Nuestros Valores</h2>
      <ul className='pl-12'>
        <li><span className='font-bold'>Compasión:</span> Tratamos a todos los animales con el respeto y el cariño que merecen.</li>
        <li><span className='font-bold'>Compromiso:</span> Nos dedicamos a mejorar la vida de los animales en nuestra comunidad.</li>
        <li><span className='font-bold'>Educación:</span> Promovemos la concienciación sobre el bienestar animal y la adopción responsable.</li>
        <li><span className='font-bold'>Transparencia:</span> Operamos con claridad y honestidad en todas nuestras acciones y comunicaciones.</li>
      </ul>
      <h2 className='text-3xl m-3 pt-5'>¿Qué Hacemos?</h2>
      <ul className='pl-12'>
        <li><span className='font-bold'>Rescate</span>: Colaboramos con voluntarios y otras organizaciones para rescatar animales en situación de abandono o peligro.</li>
        <li><span className='font-bold'>Rehabilitación:</span> Proporcionamos atención médica, nutrición adecuada y amor a los animales rescatados, ayudándolos a recuperarse física y emocionalmente.</li>
        <li><span className='font-bold'>Adopción:</span> Facilitamos el proceso de adopción, asegurándonos de que cada animal encuentre un hogar adecuado y amoroso.</li>
        <li><span className='font-bold'>Concienciación:</span> Educamos a la comunidad sobre la importancia de la esterilización, la vacunación y el cuidado responsable de las mascotas.</li>
      </ul>

      <h2 className='text-3xl m-3 pt-5'>Nuestro Proceso de Adopción</h2>
      <p className='pl-5 pr-5 pb-3'>Adoptar un animal de {data.config.title} es un compromiso serio y significativo. A continuación, describimos el proceso ficticio que llevamos a cabo para garantizar que cada adopción sea exitosa y que nuestros animales encuentren hogares adecuados:</p>
      <ul className='pl-12'>
        <li><span className='font-bold'>Solicitud de Adopción:</span> Los interesados completan un formulario de solicitud detallando su hogar, estilo de vida y experiencia con mascotas.</li>
        <li><span className='font-bold'>Evaluación:</span> Realizamos entrevistas y visitas domiciliarias para asegurar que el entorno del adoptante sea seguro y adecuado para el animal.</li>
        <li><span className='font-bold'>Conocimiento Mutuo:</span> Facilitamos encuentros entre los adoptantes y los animales para asegurar una buena conexión.</li>
        <li><span className='font-bold'>Contrato de Adopción:</span> Los adoptantes firman un contrato comprometiéndose a cuidar del animal y seguir nuestras recomendaciones.</li>
        <li><span className='font-bold'>Seguimiento:</span> Mantenemos contacto con los adoptantes para ofrecer apoyo y asegurarnos de que todo va bien con el nuevo miembro de la familia.</li>
      </ul>

      <h2 className='text-3xl m-3 pt-5'>Cómo Puedes Ayudar</h2>
      <p className='pl-5 pr-5 pb-3'>Aunque este proyecto es ficticio, existen muchas maneras en las que puedes ayudar a las protectoras reales:</p>
      <ul className='pl-12'>
        <li><span className='font-bold'>Voluntariado:</span> Ofrece tu tiempo para ayudar en las tareas diarias de una protectora.</li>
        <li><span className='font-bold'>Donaciones:</span> Contribuye con fondos o suministros para apoyar el cuidado de los animales.</li>
        <li><span className='font-bold'>Adopta, No Compres:</span> Considera adoptar en lugar de comprar tu próxima mascota.</li>
        <li><span className='font-bold'>Difunde:</span> Ayuda a crear conciencia compartiendo información sobre el bienestar animal y la adopción.</li>
      </ul>

      <h2 className='text-3xl m-3 pt-5'>Conclusión</h2>
      <p className='pl-5 pr-5 pb-3'>Gracias por visitar {data.config.title} y por tu interés en aprender sobre el funcionamiento de una protectora de animales. Aunque nuestra organización es ficticia, la información proporcionada refleja el trabajo crucial que realizan las protectoras reales en todo el mundo. Esperamos que este proyecto te inspire a apoyar y participar en iniciativas de bienestar animal en tu comunidad.</p>
    </div>
  )
}

export default About
