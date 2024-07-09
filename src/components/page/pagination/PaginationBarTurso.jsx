import React, { useContext, useEffect, useState } from 'react'
import { turso } from '../../../db/tursoClient';
import Contexto from '../../contexts/Contexto';

function PaginationBarTurso({ setOffset, offset }) {

  const { data } = useContext(Contexto)

  const perPage = data.config.turso.animalsPerPage
  const [pages, setPages] = useState()
  const [paginaActual, setPaginaActual] = useState(5)


  useEffect(() => {
    const table = data.config.turso.animalsTable
    const sql = `select count(*) as totalAnimales from ${table};`

    turso.execute(sql)
      .then((rs) => {
        const total = rs.rows[0].totalAnimales
        const totalPaginas = Math.ceil(total / perPage);
        const paginas = Array.from({ length: totalPaginas }, (v, i) => i + 1);
        setPages(paginas)
      })
  }, [data, perPage])



  const handlerBotones = (accion) => {
    if (accion === '>') {
      if ((paginaActual + 1) <= pages.length) {
        setPaginaActual(paginaActual + 1)
        setOffset(paginaActual * perPage)
      }
    } else {
      if ((paginaActual - 1) >= 0) {
        setPaginaActual(paginaActual - 1)
        setOffset((paginaActual - 1) * perPage)
      }
    }
  }



  return (
    <div className='flex flex-row justify-between'>
      <button name="anterior" onClick={() => handlerBotones('<')} className='border-2 border-pink-600 p-2 rounded-full bg-white text-black hover:text-white hover:bg-gray-800 text-sm'>Anterior</button>
      <button name="siguiente" onClick={() => handlerBotones('>')} className='border-2 border-pink-600 p-2 rounded-full bg-white text-black hover:text-white hover:bg-gray-800 text-sm'>Siguiente</button>
    </div>
  )
}

export default PaginationBarTurso