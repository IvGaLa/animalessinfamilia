import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Animal from './../animals/Animal'
import Animals from './../animals/Animals'

function Rutas() {
  return (
    <Routes>
      <Route path='/animal/:id' element={<Animal />} />
      <Route path='/' element={<Animals />} />
    </Routes>
  )
}

export default Rutas