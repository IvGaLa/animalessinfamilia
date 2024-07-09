import React from 'react'

function PaginationBarFirebase() {

  const buttonClass = 'border-2 border-pink-600 p-2 rounded-full bg-white text-black hover:text-white hover:bg-gray-800 text-sm'

  return (
    <div className='flex flex-row justify-between'>
      <button className={buttonClass}>Anterior</button>
      <button className={buttonClass}>Siguiente</button>
    </div>
  )
}

export default PaginationBarFirebase
