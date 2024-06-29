import dataAnimals from './dataAnimales.json'

const _animalsPerPage = 9

// Devuelve el listado completo de todos los animales
export const getAllAnimals = () => {
  return dataAnimals
}

// Devuelve un solo registro, buscando por el id.
export const getAnimalById = (id) => {
  return dataAnimals.find((a) => a.id === Number(id))
}

// Devuelve un array con las páginas que deben renderizarse
// animalsPerPage indica el número de animales por página
export const paginationBar = (animalsPerPage = _animalsPerPage) => {
  const total = Math.ceil(getAllAnimals().length / animalsPerPage)
  let paginatorArray = []
  for (let i = 1; i <= total; i++) {
    paginatorArray.push(i)
  }
  return paginatorArray
}

// Recupera los animales de la página según _animalsPerPage
export const getAnimalsPerPage = (page = 1, animalsPerPage = _animalsPerPage) => {
  const start = (page - 1) * animalsPerPage;
  const end = start + animalsPerPage;
  const animals = getAllAnimals()
  return animals.slice(start, end);
}