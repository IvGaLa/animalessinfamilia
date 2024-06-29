import React, { useState, useEffect } from 'react'
import { IconGenderFemale, IconGenderMale } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';
import { getAnimalsPerPage, paginationBar } from '../../../data/DataAnimales'
import AnimalPagination from './AnimalPagination';

function AnimalGrid() {

  const iconSize = 20

  const [page, setPage] = useState(1)
  const numPages = paginationBar()
  const [data_animales, setDataAnimales] = useState(getAnimalsPerPage())

  useEffect(() => {
    setDataAnimales(getAnimalsPerPage(page))
  }, [page])


  return (
    <>
      <div className="flex flex-wrap -m-4">
        {
          data_animales.map((animal, index) => (
            <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt={animal.name} className="absolute inset-0 w-full h-full object-cover object-center" src={`/images/animals/${animal.image}`} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80">
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
          ))
        }
      </div>
      <AnimalPagination page={page} numPages={numPages} setPage={setPage} />
    </>
  )
}

export default AnimalGrid
