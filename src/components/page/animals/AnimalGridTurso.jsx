import React, { useState, useEffect, useContext } from 'react'
import Contexto from 'components/contexts/Contexto';

import { turso } from 'db/tursoClient';
import PaginationBarTurso from 'components/page/pagination/PaginationBarTurso';
import AnimalCard from './AnimalCard';
import AnimalGridLoading from './AnimalGridLoading';


function AnimalGrid() {

  const { data } = useContext(Contexto)
  const [animales, setAnimales] = useState()

  const [offset, setOffset] = useState(0)


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
      <article className="grid-cols-1 sm:grid md:grid-cols-2 lg:grid-cols-3">
        {
          (animales) ?
          animales.map((animal, index) => (
            <AnimalCard key={`${animal.id}-${animal.name}`} animal={animal} />
          ))
          :
          <AnimalGridLoading />
        }
      </article >
      <PaginationBarTurso setOffset={setOffset} />
    </>
  )
}

export default AnimalGrid