import React, { useContext } from 'react'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import Contexto from '../../contexts/Contexto';

function AnimalPagination({ page, numPages, setPage }) {

  // Manejamos las flechas de Anterior y Siguiente
  const handlerFlechas = (accion) => {
    if ((accion === 'anterior') && (page !== 1)) {
      setPage(page - 1)
    }
    if ((accion === 'siguiente') && (page !== 10)) {
      setPage(page + 1)
    }
  }

  const { data } = useContext(Contexto)

  return (
    <div className="flex row justify-center m-3">
      <button
        className={data.estilos.pagination_button}
        type="button"
        onClick={() => handlerFlechas('anterior')}
      >
        <span className='flex justify-center'><IconArrowLeft /></span>
      </button >
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
      <button
        className={data.estilos.pagination_button}
        type="button"
        onClick={() => handlerFlechas('siguiente')}
      >
        <span className='flex justify-center'><IconArrowRight /></span>
      </button >
    </div>
  )
}

export default AnimalPagination