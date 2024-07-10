import React, { useContext, useEffect, useState } from 'react'
import { turso } from '../../../db/tursoClient';
import Contexto from '../../contexts/Contexto';

function PaginationBarTurso({ setOffset }) {

  const { data } = useContext(Contexto)

  const perPage = data.config.turso.animalsPerPage
  const [pages, setPages] = useState()
  const [pageActual, setPageActual] = useState(1)

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


  const handlerChangePage = (pageNum) => {
    setPageActual(pageNum)
    setOffset((pageNum - 1) * perPage)
  }


  return (
    <div className='flex flex-row justify-center mt-5 mb-3'>
      {
        (pages) && (
          <>
            {
              pages.map((page, index) => (
                <button key={index} onClick={() => handlerChangePage(page)} className={`${(pageActual === page ? 'bg-gray-300' : 'bg-white')} mx-2 border-2 border-pink-600 p-2 rounded-full  text-black hover:text-white hover:bg-gray-800 text-sm`}>
                  {page}
                </button>
              ))
            }
          </>
        )
      }
    </div>
  )
}

export default PaginationBarTurso