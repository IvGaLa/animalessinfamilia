import React from 'react'
import AnimalGrid from './AnimalGrid'
import { data_animales } from '../../../data/DataAnimales'

function Animals() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Sed pharetra tincidunt dui eu facilisis. Phasellus vel leo et tortor laoreet maximus. Pellentesque nec pharetra erat. Aliquam nibh neque, porta sed lorem vitae, molestie ornare nisi. Nam vel facilisis nisl. Nullam nec nisl sit amet turpis porttitor efficitur. Nunc ipsum ex, ornare in erat ut, pulvinar sagittis felis. Vestibulum porttitor massa vel finibus laoreet. Aliquam non enim non lectus accumsan ultrices vitae id enim. Curabitur vulputate iaculis vehicula.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            data_animales.map((animal, index) => (
              <AnimalGrid key={index} animal={animal} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Animals
