import React from 'react'
import { animales } from './../../data/Animales'
import { NavLink } from 'react-router-dom'

function Animals() {
  return (
    <div>
      {
        animales.map((animal, index) => (
          <div key={index}>
            <NavLink to={`/animal/${animal.id}`}>{animal.name}</NavLink>
          </div>
        ))
      }
    </div>
  )
}

export default Animals
