import { useContext } from 'react'
import { IconCake, IconGenderFemale, IconGenderMale } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';
import Contexto from '../../contexts/Contexto';

function AnimalCard({ animal }) {

  const { data } = useContext(Contexto)
  const iconSize = 24
  const colorSex = {
    [data.animalsex.hembra]: {
      text: 'text-pink-300',
      imageborder: 'border-2 border-pink-600',
      cardborder: 'border-4 border-pink-400'
    },
    [data.animalsex.macho]: {
      text: 'text-blue-300',
      imageborder: 'border-2 border-blue-600',
      cardborder: 'border-4 border-blue-400'
    }
  };

  const {id, sex, name, title,image, breed, birth} = animal
  
  return (
    < NavLink to={`${data.config.rutas.animal}${id}`}>
      <section className={`${colorSex[sex]['text']} ${colorSex[sex]['cardborder']} p-2 mx-3 mt-6 flex flex-col rounded-[30px] bg-gray-800 shadow-none transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:shadow-black`}>
        <h2
          className={`text-center mt-5 text-5xl font-sans font-bold`}>
          {name}
        </h2>

        <h3 className={`text-2xl m-2 p-4 whitespace-nowrap text-center`}>{title}</h3>

        <div className='flex justify-center'>
          <img
            className={`rounded-full mb-4 ${colorSex[sex]['imageborder']}`}
            src={`${data.config.dirs.animals}${data.config.dirs.animals_thumb}${image}`}
            alt={name} />
        </div>

        <section className="flex flex-col border-t-2 border-gray-300 px-6 py-3">
          <div>
            {(sex === data.animalsex.macho)
              ? <IconGenderMale className="inline" size={iconSize} />
              : <IconGenderFemale className="inline" size={iconSize} />}
            {breed}
          </div>
          <div><IconCake className='inline text-orange-500' size={iconSize} /> {birth}</div>
        </section>

      </section>
    </NavLink>
  )
}

export default AnimalCard
