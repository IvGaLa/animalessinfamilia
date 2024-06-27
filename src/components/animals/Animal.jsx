import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { animales } from '../../data/Animales'
import AnimalFull from './AnimalFull'

function Animal() {
  const params = useParams()
  const animal = animales.find((a) => a.id === Number(params.id))

  return (
    <div>
      {
        (!animal) ? <Navigate to='/' /> : <AnimalFull animal={animal} />
      }
    </div>
  )
}

export default Animal
