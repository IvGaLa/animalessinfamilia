import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css'
import App from './App';
import CtxProvider from './components/contexts/CtxProvider';

const root = ReactDOM.createRoot(document.getElementById('animalessinfamilia'));
root.render(
  <CtxProvider>
    <App />
  </CtxProvider>
);