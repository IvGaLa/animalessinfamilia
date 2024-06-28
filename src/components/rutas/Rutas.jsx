import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Animals from '../page/animals/Animals';
import Inicio from './../page/Inicio';
import Contacto from './../page/Contacto';
import Nosotros from './../page/Nosotros';
import RouteWrapper from './RouteWrapper'; // Wrapper para ejecutar código antes de entrar a los enlaces.
import AnimalFull from '../page/animals/AnimalFull';
import Adopted from '../page/animals/Adopted';

function Rutas() {
  return (
    <Routes>
      <Route path='/animales' element={<RouteWrapper element={Animals} />} />
      <Route path='/animal/:id' element={<RouteWrapper element={AnimalFull} />} />
      <Route path='/adopted' element={<RouteWrapper element={Adopted} />} />
      <Route path='/nosotros' element={<RouteWrapper element={Nosotros} />} />
      <Route path='/contacto' element={<RouteWrapper element={Contacto} />} />
      <Route path='/' element={<RouteWrapper element={Inicio} />} />
    </Routes>
  );
}

export default Rutas;
