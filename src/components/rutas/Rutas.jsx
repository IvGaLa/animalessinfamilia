import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Animals from '../page/animals/Animals';
import Inicio from './../page/Inicio';
import Contacto from './../page/Contacto';
import RouteWrapper from './RouteWrapper'; // Wrapper para ejecutar código antes de entrar a los enlaces.
import AnimalFull from '../page/animals/AnimalFull';
import Adopted from '../page/animals/Adopted';
import About from '../page/About';
import Contexto from '../contexts/Contexto';

function Rutas() {

  const { data } = useContext(Contexto)

  return (
    <Routes>
      <Route path={data.config.rutas.animales} element={<RouteWrapper element={Animals} />} />
      <Route path={`${data.config.rutas.animal}:id`} element={<RouteWrapper element={AnimalFull} />} />
      <Route path={data.config.rutas.adopted} element={<RouteWrapper element={Adopted} />} />
      <Route path={data.config.rutas.contacto} element={<RouteWrapper element={Contacto} />} />
      <Route path={data.config.rutas.nosotros} element={<RouteWrapper element={About} />} />
      <Route path={data.config.rutas.root} element={<RouteWrapper element={Inicio} />} />
    </Routes>
  );
}

export default Rutas;
