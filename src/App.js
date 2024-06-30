import { BrowserRouter } from 'react-router-dom';
import Rutas from './components/rutas/Rutas';
import NavBar from './components/page/navbar/NavBar';
import Footer from './components/page/footer/Footer';
import { useContext, useEffect } from 'react';
import Contexto from './components/contexts/Contexto';


function App() {
  const { data } = useContext(Contexto)
  const config = data.config

  useEffect(() => {
    document.title = config.title
  }, [config.title]);

  return (
    <div className='relative min-h-screen'>
      <BrowserRouter>
        <NavBar />
        <Rutas />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
