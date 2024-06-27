import { BrowserRouter } from 'react-router-dom';
import Rutas from './components/Rutas';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Rutas />
      </BrowserRouter>
    </>
  );
}

export default App;
