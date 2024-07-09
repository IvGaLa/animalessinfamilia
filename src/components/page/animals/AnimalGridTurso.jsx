import React, { useState, useEffect, useContext } from 'react'
import { IconCake, IconGenderFemale, IconGenderMale } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';
import Contexto from '../../contexts/Contexto';

import { turso } from '../../../db/tursoClient';
import PaginationBarTurso from '../pagination/PaginationBarTurso';


function AnimalGrid() {

  const { data } = useContext(Contexto)
  const iconSize = 24
  const [animales, setAnimales] = useState()
  const colorSex = {
    [data.animalsex.hembra]: {
      text: 'text-pink-300',
      imageborder: 'border-2 border-pink-600',
      cardborder: 'border-4 border-pink-400'
    },
    [data.animalsex.macho]: {
      text: 'text-blue-300',
      imageborder: 'border-2 border-blue-600',
      cardborder: 'border-4 border-blue-400'
    }
  };

  const [offset, setOffset] = useState(data.config.turso.animalsPerPage * 5)


  useEffect(() => {
    const table = data.config.turso.animalsTable
    const perPage = data.config.turso.animalsPerPage
    const sql = `SELECT * FROM ${table} ORDER BY id ASC LIMIT ${perPage} OFFSET ${offset};`

    turso.execute(sql)
      .then((rs) => {
        setAnimales(rs.rows)
      })
  }, [data, offset])

  return (
    <>
      <PaginationBarTurso setOffset={setOffset} offset={offset} />
      <article className="grid-cols-1 sm:grid md:grid-cols-2 lg:grid-cols-3">
        {
          (animales) &&
          <>
            {
              animales.map((animal, index) => (
                < NavLink key={index} to={`${data.config.rutas.animal}${animal.id}`}>
                  <section className={`${colorSex[animal.sex]['text']} ${colorSex[animal.sex]['cardborder']} p-2 mx-3 mt-6 flex flex-col rounded-[30px] bg-gray-800 shadow-none transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:shadow-black`}>
                    <h2
                      className={`text-center mt-5 text-5xl font-sans font-bold`}>
                      {animal.name}
                    </h2>

                    <h3 className={`text-2xl m-2 p-4 whitespace-nowrap text-center`}>{animal.title}</h3>
                    <h3 className={`text-sm m-2 p-4 whitespace-nowrap text-center`}>{animal.image}</h3>

                    <div className='flex justify-center'>
                      <img
                        className={`rounded-full mb-4 ${colorSex[animal.sex]['imageborder']}`}
                        src={`${data.config.dirs.animals}${data.config.dirs.animals_thumb}${animal.image}`}
                        alt={animal.name} />
                    </div>

                    <section className="flex flex-col border-t-2 border-gray-300 px-6 py-3">
                      <div>
                        {(animal.sex === data.animalsex.macho)
                          ? <IconGenderMale className="inline" size={iconSize} />
                          : <IconGenderFemale className="inline" size={iconSize} />}
                        {animal.breed}
                      </div>
                      <div><IconCake className='inline text-orange-500' size={iconSize} /> {animal.birth}</div>
                    </section>

                  </section>
                </NavLink>
              ))
            }
          </>
        }
      </article >
      {/* Mostrará el paginador si hay mas de una página a mostrar*/}
      {/*(numPages.length > 1) && <PaginationBar page={page} numPages={numPages} setPage={setPage} />*/}
    </>
  )
}

export default AnimalGrid