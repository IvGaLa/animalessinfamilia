import React, { useState, useEffect, useContext } from 'react'
import { IconGenderFemale, IconGenderMale } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';
import { getAnimalsPerPage, paginationBar } from '../../../data/DataAnimales'
import PaginationBar from '../pagination/PaginationBar';
import Contexto from '../../contexts/Contexto';

function AnimalGrid() {

  const { data } = useContext(Contexto)
  const iconSize = 30
  const initPage = (sessionStorage.getItem(data.sessionStorageNames.paginationPage) ? Number(sessionStorage.getItem(data.sessionStorageNames.paginationPage)) : 1)
  const [page, setPage] = useState(initPage)
  const numPages = paginationBar()
  const [animales, setAnimales] = useState(getAnimalsPerPage())


  useEffect(() => {
    setAnimales(getAnimalsPerPage(page))
    sessionStorage.setItem(data.sessionStorageNames.paginationPage, page)
  }, [page, data.sessionStorageNames.paginationPage])

  return (
    <>
      <article className="grid-cols-1 sm:grid md:grid-cols-2 lg:grid-cols-3">
        {
          animales.map((animal, index) => (
            <NavLink key={index} to={`/animal/${animal.id}`}>
              <section
                className="p-2 mx-3 mt-6 flex flex-col rounded-[30px] bg-gray-100 hover:bg-gray-200">
                <h2 className="flex justify-center mt-5 mb-9 text-5xl font-sans font-bold">{animal.name}</h2>
                <div className='flex justify-center'>
                  <img
                    className="rounded-full"
                    src={`${data.config.dirs.animals}${data.config.dirs.animals_thumb}${animal.image}`}
                    alt={animal.name} />
                </div>

                <span className="p-6 flex justify-center text-3xl whitespace-nowrap">{animal.title}</span>
                <section
                  className="flex flex-col-2 justify-between border-t-2 border-gray-300 px-6 py-3">
                  <span>{animal.breed} ({animal.birth})</span>
                  <span>{(animal.sex === data.animalsex.macho) ? <IconGenderMale size={iconSize} /> : <IconGenderFemale size={iconSize} />}</span>
                </section>
              </section>
            </NavLink>
          ))
        }
      </article>
      {/* Mostrará el paginador si hay mas de una página a mostrar*/}
      {(numPages.length > 1) && <PaginationBar page={page} numPages={numPages} setPage={setPage} />}
    </>
  )
}

export default AnimalGrid
