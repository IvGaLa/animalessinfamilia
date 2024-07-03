import React, { useContext, useState } from 'react'
import Contexto from '../contexts/Contexto'

function Contacto() {

  const { data } = useContext(Contexto)

  const [datos_enviados, setDatosEnviado] = useState(false)
  const [campos, setCampos] = useState({ nombre: '', email: '', mensaje: '' })

  const handlerChange = (e) => {
    setDatosEnviado(false)
    const { name, value } = e.target
    const datos = { ...campos }
    datos[name] = value
    setCampos(datos)
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    // Aquí hacemos el envío del formulario
    e.target.nombre.value = ''
    e.target.email.value = ''
    e.target.mensaje.value = ''
    setDatosEnviado(true)
  }

  return (
    <>
      <section className={`container mx-auto pt-20 ${data.estilos.section}`}>
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className={data.estilos.h1}>Contacto</h1>
          <p className="mb-6">
            Si tienes alguna pregunta o deseas obtener más información sobre cómo puedes ayudar a nuestros animales, no dudes en ponerte en contacto con nosotros a través del siguiente formulario.
          </p>
          <form onSubmit={handlerSubmit}>
            <div className="mb-4">
              <label htmlFor="idNombre" className="block text-sm font-medium text-gray-700">Nombre</label>
              <input onChange={handlerChange} required type="text" id="idNombre" name="nombre" autoComplete='name' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="idEmail" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
              <input onChange={handlerChange} required type="email" id="idEmail" name="email" autoComplete='email' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="idMensaje" className="block text-sm font-medium text-gray-700">Mensaje</label>
              <textarea onChange={handlerChange} required id="idMensaje" name="mensaje" rows="4" autoComplete='off' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" ></textarea>
            </div>
            <div className="text-right">
              <button type='submit' className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Enviar
              </button>
            </div>
          </form>
        </div>
        {
          (datos_enviados) &&
          <div className="p-4 mt-5 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
            <span className="font-medium">Mensaje enviado</span> Gracias por contactar con nosotros.
          </div>
        }
      </section>
    </>
  )
}

export default Contacto
