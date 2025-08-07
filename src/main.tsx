import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import App from './App';

// Set basename for subdirectory deployment
const getBasename = () => {
  const pathSegments = window.location.pathname.split('/');
  return pathSegments[1] ? `/${pathSegments[1]}` : '';
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={getBasename()}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
