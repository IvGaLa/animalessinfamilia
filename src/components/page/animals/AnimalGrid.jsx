import React from 'react'
import { IconGenderFemale, IconGenderMale } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';


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
function AnimalGrid({ animal }) {
  const iconSize = 20
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img alt={animal.name} className="absolute inset-0 w-full h-full object-cover object-center" src={`/images/animals/${animal.image}`} />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <NavLink to={`/animal/${animal.id}`}>
            <h2 className="flex flex-row tracking-widest text-sm title-font font-medium text-green-500 mb-1">
              {(animal.sex === 'macho') ? <IconGenderMale size={iconSize} /> : <IconGenderFemale size={iconSize} />}{animal.name} ({animal.breed})
            </h2>
          </NavLink>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{animal.title}</h1>
          <p className="leading-relaxed">{animal.description}</p>
        </div>
      </div>
    </div>
  )
}

export default AnimalGrid
