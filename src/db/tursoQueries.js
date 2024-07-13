import { turso } from './tursoClient';


export const getAllAnimals = (data) => {
  const table = data.config.turso.animalsTable
  const sql = `SELECT * FROM ${table} ORDER BY name;`

  turso.execute(sql)
    .then((rs) => {
      return rs.rows
    })
}


export const getCount = (data) => {
  const table = data.config.turso.animalsTable
  const sql = `select count(*) as totalAnimales from ${table};`

  turso.execute(sql)
    .then((rs) => {
      return rs.rows[0].totalAnimales
    })
}


export const getNumPages = (data) => {
  const perPage = data.config.turso.animalsPerPage
  const total = getCount(data)
  const totalPaginas = Math.ceil(total / perPage);
  const paginas = Array.from({ length: totalPaginas }, (v, i) => i + 1);
  return paginas
}