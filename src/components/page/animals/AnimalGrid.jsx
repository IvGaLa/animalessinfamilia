import React, { useState, useEffect } from 'react'
import { IconGenderFemale, IconGenderMale } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';
import { getAnimalsPerPage, paginationBar } from '../../../data/DataAnimales'
import AnimalPagination from './AnimalPagination';

function AnimalGrid() {

  const iconSize = 30
  const initPage = (sessionStorage.getItem('paginationPage') ? Number(sessionStorage.getItem('paginationPage')) : 1)
  const [page, setPage] = useState(initPage)
  const numPages = paginationBar()
  const [animales, setAnimales] = useState(getAnimalsPerPage())

  useEffect(() => {
    setAnimales(getAnimalsPerPage(page))
    sessionStorage.setItem('paginationPage', page)
  }, [page])

  return (
    <>
      <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
        {
          animales.map((animal, index) => (
            <NavLink key={index} to={`/animal/${animal.id}`}>
              <div
                className="p-2 mx-3 mt-6 flex flex-col rounded-[30px] bg-gradient-to-b from-gray-300  hover:bg-gradient-to-t">
                <h5 className="flex justify-center mt-5 mb-9 text-5xl font-sans font-bold">{animal.name}</h5>
                <span className='flex justify-center'>
                  <img
                    className="rounded-full"
                    src={`/images/animals/384x384/${animal.image}`}
                    alt={animal.name} />
                </span>

                <div className="p-6">
                  <p className="flex justify-center text-3xl">{animal.title}</p>
                </div>
                <div
                  className="flex flex-row justify-between border-t-2 border-gray-300 px-6 py-3">
                  <span>{animal.breed}</span>
                  <span>{(animal.sex === 'macho') ? <IconGenderMale size={iconSize} /> : <IconGenderFemale size={iconSize} />}</span>
                  <span>{animal.birth}</span>
                </div>
              </div>
            </NavLink>
          ))
        }
      </div>

      <AnimalPagination page={page} numPages={numPages} setPage={setPage} />
    </>
  )
}

export default AnimalGrid

/*

      <div className="flex flex-wrap -m-4">
        {
          data_animales.map((animal, index) => (
            <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img src={`/images/animals/384x384/${animal.image}`} alt={animal.name} className="px-8 py-10 absolute inset-0 h-96 w-96 object-cover object-center" />
                <div className="px-8 py-10 relative w-96 border-2 border-gray-200 bg-white opacity-0 hover:opacity-80">
                  <NavLink to={`/animal/${animal.id}`}>
                    <h2 className="flex flex-row tracking-widest text-2xl title-font font-medium text-green-500 mb-1">
                      {animal.name} ({animal.breed}) {(animal.sex === 'macho') ? <IconGenderMale size={iconSize} /> : <IconGenderFemale size={iconSize} />}
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


*/