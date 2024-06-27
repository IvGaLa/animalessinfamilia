import React from 'react'
/*

  {
    "id": 0,
    "name": "Nombre0",
    "birth": "16/4/2015",
    "title": "Título del animal 0",
    "description": "Descripción detallada del animal 0. Este texto es un ejemplo de descripción más larga para simular datos reales.",
    "sex": "macho",
    "since": "10/2/2020",
    "breed": "Raza0",
    "image": "imagen0.jpg"
  }

 */
function AnimalFull({ animal }) {
  return (
    <div>
      <h1>{animal.name}</h1>
      <h2>{animal.title}</h2>
      <img className='max-w-lg	max-h-lg	' src={`/images/animals/${animal.image}`} alt={animal.name} />
      <p>{animal.description}</p>
    </div>
  )
}

export default AnimalFull
