import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Listado from './Listado'
import Animal from './Animal'

function Rutas() {
  return (
    <Routes>
      <Route path='/animal/:id' element={<Animal />} />
      <Route path='/' element={<Listado />} />
    </Routes>
  )
}

export default Rutas