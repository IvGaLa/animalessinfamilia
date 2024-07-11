import React, { useContext, useEffect, useState } from 'react'
import { turso } from '../../../db/tursoClient';
import Contexto from '../../contexts/Contexto';
import { IconArrowBigLeft, IconArrowBigRight } from '@tabler/icons-react';

function PaginationBarTurso({ setOffset }) {

  const { data } = useContext(Contexto)

  const perPage = data.config.turso.animalsPerPage
  const [pages, setPages] = useState()
  const [pageActual, setPageActual] = useState((sessionStorage.getItem(data.sessionStorageNames.paginationPage)) ? Number(sessionStorage.getItem(data.sessionStorageNames.paginationPage)) : 1)

  useEffect(() => {
    const table = data.config.turso.animalsTable
    const sql = `select count(*) as totalAnimales from ${table};`

    turso.execute(sql)
      .then((rs) => {
        const total = rs.rows[0].totalAnimales
        const totalPaginas = Math.ceil(total / perPage);
        const paginas = Array.from({ length: totalPaginas }, (v, i) => i + 1);
        setPages(paginas)
        setOffset((pageActual - 1) * perPage)
      })
  }, [data, perPage])

  useEffect(()=>{
    if(sessionStorage.getItem(data.sessionStorageNames.paginationPage) !== pageActual){
      sessionStorage.setItem(data.sessionStorageNames.paginationPage, pageActual)
    }
  },[pageActual, data.sessionStorageNames.paginationPage])

  const handlerChangePage = (pageNum) => {
    switch (pageNum) {
      case '+': // Siguiente
        pageNum = (pageActual < 10) ? pageActual + 1 : pageActual
        break;
    
      case '-': // Anterior
        pageNum = (pageActual > 1) ? pageActual - 1 : pageActual
        break

      default:
        break;
    }
    setPageActual(pageNum)
    setOffset((pageNum - 1) * perPage)
  }

  return (
    <div className='flex flex-row justify-center mt-5 mb-3'>
      {
        (pages) && (
          <>
            <button onClick={() => handlerChangePage('-')} className='bg-white mx-2 border-2 border-pink-600 p-2 rounded-full  text-black hover:text-white hover:bg-gray-800 text-sm'>
              <IconArrowBigLeft />
            </button>
            {
              pages.map((page, index) => (
                <button key={index} onClick={() => handlerChangePage(page)} className={`${(pageActual === page ? 'bg-gray-300' : 'bg-white')} mx-2 border-2 border-pink-600 p-2 rounded-full  text-black hover:text-white hover:bg-gray-800 text-sm`}>
                  {page}
                </button>
              ))
            }
            <button onClick={() => handlerChangePage('+')} className='bg-white mx-2 border-2 border-pink-600 p-2 rounded-full  text-black hover:text-white hover:bg-gray-800 text-sm'>
              <IconArrowBigRight />
            </button>
          </>
        )
      }
    </div>
  )
}

export default PaginationBarTurso