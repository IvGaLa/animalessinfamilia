import { turso } from './tursoClient';


export const getAllAnimals = (setAnimales, data) => {
  const table = data.config.turso.animalsTable
  const perPage = data.config.turso.animalsPerPage
  const sql = `SELECT * FROM ${table} ORDER BY name ASC LIMIT ${perPage};`

  turso.execute(sql)
    .then((rs) => {
      setAnimales(rs.rows)
    })
}


export const getCount = (setCount = false, data) => {
  const table = data.config.turso.animalsTable
  const sql = `select count(*) as totalAnimales from ${table};`

  turso.execute(sql)
    .then((rs) => {
      if (setCount) {
        setCount(rs.rows[0].totalAnimales)
      } else {
        return rs.rows[0].totalAnimales
      }
    })
}


export const getNumPages = (setNumPages, data) => {
  const perPage = data.config.turso.animalsPerPage
  const total = getCount(data)
  const totalPaginas = Math.ceil(total / perPage);
  const paginas = Array.from({ length: totalPaginas }, (v, i) => i + 1);
  setNumPages(paginas)
}