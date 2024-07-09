import { BrowserRouter } from 'react-router-dom';
import Rutas from './components/rutas/Rutas';
import NavBar from './components/page/navbar/NavBar';
import Footer from './components/page/footer/Footer';
import { useContext, useEffect } from 'react';
import Contexto from './components/contexts/Contexto';

function App() {
  const { data } = useContext(Contexto)

  useEffect(() => {
    document.title = data.config.title
  }, [data.config.title]);

  return (
    <div className='relative bg-red-50 text-gray-900 text-xl min-h-screen'>
      <BrowserRouter>
        <NavBar />
        <Rutas />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
