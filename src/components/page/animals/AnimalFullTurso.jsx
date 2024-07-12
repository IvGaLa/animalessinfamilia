import { useContext, useEffect, useState } from 'react'
import { IconGenderFemale, IconGenderMale, IconCake, IconHome } from '@tabler/icons-react';
import { Navigate, useParams } from 'react-router-dom'
import { turso } from 'db/tursoClient';
import Contexto from 'components/contexts/Contexto';

function AnimalFull() {
  const params = useParams()
  const iconSize = 24
  const { data } = useContext(Contexto)
  const [animal, setAnimal] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const id = (isNaN(Number(params.id))) ? 0 : params.id
    const table = data.config.turso.animalsTable
    const sql = `SELECT * FROM ${table} WHERE id = ${id};`

    turso.execute(sql)
      .then((rs) => {
        setAnimal(rs.rows[0])
        setLoading(false)
      })
  }, [data, params])

  return (
    <>
      {
        (animal) ?
          <div className=" px-10 py-6 mx-auto">

            <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50 my-20 rounded-2xl">

              <img className="rounded-3xl w-full shadow-xl h-full" src={`${data.config.dirs.animals}${animal.image}`} alt={animal.name} />
              <div className="flex items-center justify-start mt-4 mb-4">
                <span className="text-sm p-1 bg-red-400 text-white rounded-lg">
                  {animal.breed}
                </span>
              </div>

              <div className="mt-2">
                <span className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-purple-500">
                  {animal.name}
                </span>
                <div className="flex justify-start items-center text-sm text-gray-400 font-bold">
                  <p className="mt-2 p-2 rounded-full hover:bg-gray-200 hover:text-orange-400">
                    <IconCake size={iconSize} className='inline' /> {animal.birth}
                  </p>
                  <p className="mt-2 p-2 rounded-full hover:bg-gray-200 hover:text-purple-400">
                    <IconHome size={iconSize} className='inline' /> {animal.since}
                  </p>
                </div>
                <div className="font-light text-gray-600">
                  <span className="flex items-center mt-6 mb-6">
                    {(animal.sex === data.animalsex.macho)
                      ? <IconGenderMale className='rounded-full sm:block text-blue-400' size={iconSize} />
                      : <IconGenderFemale className='rounded-full sm:block text-pink-400' size={iconSize} />}
                    <h1 className="ml-3 font-bold text-gray-700">{animal.title}</h1>
                  </span>
                </div>
              </div>

              <div className="rounded-2xl text-2xl text-gray-700 bg-gray-100">
                <p className="mt-2 p-2">
                  {animal.description}
                </p>
              </div>

            </div>

          </div>
          :
          <>
            {
              (loading !== true) &&
              <Navigate to={data.config.rutas.adopted} />
            }
          </>
      }
    </>
  )
}

export default AnimalFull