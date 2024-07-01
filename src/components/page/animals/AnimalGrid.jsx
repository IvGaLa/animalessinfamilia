import React, { useState, useEffect, useContext } from 'react'
import { IconGenderFemale, IconGenderMale } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';
import { getAnimalsPerPage, paginationBar } from '../../../data/DataAnimales'
import PaginationBar from '../pagination/PaginationBar';
import Contexto from '../../contexts/Contexto';

function AnimalGrid() {

  const iconSize = 30
  const initPage = (sessionStorage.getItem('paginationPage') ? Number(sessionStorage.getItem('paginationPage')) : 1)
  const [page, setPage] = useState(initPage)
  const numPages = paginationBar()
  const [animales, setAnimales] = useState(getAnimalsPerPage())
  const { data } = useContext(Contexto)

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
                    src={`${data.config.dirs.animals}${data.config.dirs.animals_thumb}${animal.image}`}
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

      <PaginationBar page={page} numPages={numPages} setPage={setPage} />
    </>
  )
}

export default AnimalGrid
