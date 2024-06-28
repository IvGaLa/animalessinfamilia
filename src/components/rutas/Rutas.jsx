import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Animal from './../animals/Animal';
import Animals from './../animals/Animals';
import Inicio from './../page/Inicio';
import Contacto from './../page/Contacto';
import Nosotros from './../page/Nosotros';
import RouteWrapper from './RouteWrapper'; // Wrapper para ejecutar código antes de entrar a los enlaces.

function Rutas() {
  return (
    <Routes>
      <Route path='/animal/:id' element={<RouteWrapper element={Animal} />} />
      <Route path='/animales' element={<RouteWrapper element={Animals} />} />
      <Route path='/nosotros' element={<RouteWrapper element={Nosotros} />} />
      <Route path='/contacto' element={<RouteWrapper element={Contacto} />} />
      <Route path='/' element={<RouteWrapper element={Inicio} />} />
    </Routes>
  );
}

export default Rutas;
