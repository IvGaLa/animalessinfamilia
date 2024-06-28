import React from 'react'
import { IconCake, IconClock } from '@tabler/icons-react';
import { Navigate, useParams } from 'react-router-dom'
import { data_animales } from '../../../data/DataAnimales'

function AnimalFull() {
  const params = useParams()
  const animal = data_animales.find((a) => a.id === Number(params.id))
  const iconSize = 24

  return (
    <>
      {
        (animal) ?
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
              <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt={animal.name} src={`/images/animals/${animal.image}`} />
              <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{animal.name}</h1>
                <p className="mb-8 leading-relaxed">{animal.description}</p>
                <div className='flex flex-col'>
                  <span className='flex flex-row'><IconCake size={iconSize} />{animal.birth}</span>
                  <span className='flex flex-row'><IconClock size={iconSize} />{animal.since}</span>
                </div>
                <p className="text-sm mt-2 text-gray-500 mb-8 w-full"></p>
              </div>
            </div>
          </section>
          :
          <Navigate to='/adopted' />
      }
    </>
  )

}

export default AnimalFull
