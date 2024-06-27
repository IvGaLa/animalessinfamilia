import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Animal from './../animals/Animal'
import Animals from './../animals/Animals'
import Inicio from './../page/Inicio'
import Contacto from './../page/Contacto'
import Nosotros from './../page/Nosotros'

function Rutas() {
  return (
    <Routes>
      <Route path='/animal/:id' element={<Animal />} />
      <Route path='/animales' element={<Animals />} />
      <Route path='/nosotros' element={<Nosotros />} />
      <Route path='/contacto' element={<Contacto />} />
      <Route path='/' element={<Inicio />} />
    </Routes>
  )
}

export default Rutas