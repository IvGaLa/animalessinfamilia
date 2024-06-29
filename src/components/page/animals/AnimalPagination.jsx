import React from 'react'

function AnimalPagination({ page, numPages, setPage }) {
  return (
    <div className="flex row justify-center m-3">
      {
        numPages.map((pageNumber, index) => (
          <button
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg rounded-r-none rounded-l-none border border-gray-900 bg-gray-100 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            key={index}
            onClick={() => setPage(pageNumber)}>
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              {pageNumber}
            </span>
          </button>
        ))
      }
    </div>
  )
}

export default AnimalPagination