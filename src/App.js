import { BrowserRouter } from 'react-router-dom';
import Rutas from './components/rutas/Rutas';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className="h-auto bg-gradient-to-r from-cyan-500 to-blue-500">
      <BrowserRouter>
        <NavBar />
        <Rutas />
      </BrowserRouter>
    </div>
  );
}

export default App;
