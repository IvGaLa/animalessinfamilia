import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import Rutas from './components/Rutas';

function App() {
  return (
    <>
      <BrowserRouter>
        <Rutas />
      </BrowserRouter>
    </>
  );
}

export default App;
