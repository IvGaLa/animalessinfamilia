import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { data_animales } from '../../../data/DataAnimales'
import AnimalFull from './_AnimalFull'

function Animal() {
  const params = useParams()
  const animal = data_animales.find((a) => a.id === Number(params.id))

  return (
    <div>
      {
        (!animal) ? <Navigate to='/' /> : <AnimalFull animal={animal} />
      }
    </div>
  )
}

export default Animal
