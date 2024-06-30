import React, { useContext } from 'react'
import Contexto from '../../contexts/Contexto'

function PaginationButton({ numPages, page, setPage }) {

  const { data } = useContext(Contexto)

  return (
    <>
      {
        numPages.map((pageNumber, index) => (
          <button
            className={`${data.estilos.pagination_button} ${(page === pageNumber) ? 'bg-green-400' : 'bg-green-200'}`}
            type="button"
            onClick={() => setPage(pageNumber)}
            key={index}>
            <span>{pageNumber}</span>
          </button >
        ))
      }
    </>
  )
}

export default PaginationButton
