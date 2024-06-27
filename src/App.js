import { BrowserRouter } from 'react-router-dom';
import Rutas from './components/rutas/Rutas';
import NavBar from './components/page/navbar/NavBar';
import Footer from './components/page/footer/Footer';
import CtxProvider from './components/contexts/CtxProvider';


function App() {
  return (
    <div className='h-[calc(100dvh)] bg-red-300'>
      <BrowserRouter>
        <CtxProvider>
          <NavBar />
          <Rutas />
          <Footer />
        </CtxProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
