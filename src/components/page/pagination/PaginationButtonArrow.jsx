import React, { useContext } from 'react'
import Contexto from '../../contexts/Contexto'
import { getMaxPages } from '../../../data/DataAnimales'

function PaginationButtonArrow({ page, setPage, IconArrow, direction }) {

  const { data } = useContext(Contexto)
  const maxPages = getMaxPages()

  const handlerDirection = (dir) => {
    if ((dir === '<') && (page !== 1)) { setPage(page - 1) }
    if ((dir === '>') && (page !== maxPages)) { setPage(page + 1) }
  }

  return (
    <button
      className={data.estilos.pagination_button}
      type="button"
      onClick={() => handlerDirection(direction)}
    >
      <span className='flex justify-center'><IconArrow /></span>
    </button >
  )
}

export default PaginationButtonArrow
