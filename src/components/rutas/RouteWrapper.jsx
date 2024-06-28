import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Contexto from '../contexts/Contexto';

// Con este wrapper lo que conseguimos es poder ejecutar código ANTES de entrar en un enlace.
const RouteWrapper = ({ element: Element }) => {
  const location = useLocation();

  const { data } = useContext(Contexto)
  const br = data.enlaces.find(e => e.to === location.pathname)
  const title = `${data.config.title} - ${br.text}`

  React.useEffect(() => {
    document.title = title
  }, [title]);

  return <Element />;
};

export default RouteWrapper;
