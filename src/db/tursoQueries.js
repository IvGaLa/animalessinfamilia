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

export const getCount = async (data) => {
  const table = data.config.turso.animalsTable;
  const sql = `SELECT * FROM ${table} ORDER BY name ASC;`;

  try {
    const rs = await turso.execute(sql);
    return rs.rows[0].total;
  } catch (error) {
    throw error;
  }
};

export const getPages = async (data) => {
  try {
    const total = await getCount(data);
    const perPage = data.config.turso.animalsPerPage;
    const totalPaginas = Math.ceil(total / perPage);
    const paginas = Array.from({ length: totalPaginas }, (v, i) => i + 1);
    return paginas;
  } catch (error) {
    throw error;
  }
};


/* 
export const getCount = (data) => {
  const table = data.config.turso.animalsTable
  const sql = `SELECT * FROM ${table} ORDER BY name ASC;`

  turso.execute(sql)
    .then((rs) => {
      return rs.rows[0].total
    })
}


export const getPages = (data) => {
  const perPage = data.config.turso.animalsPerPage
  const total = getCount(data)
  const totalPaginas = Math.ceil(total / perPage);
  const paginas = Array.from({ length: totalPaginas }, (v, i) => i + 1);
  //console.log(perPage)
  return paginas
} */