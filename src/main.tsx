import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';  // Only use BrowserRouter here

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   {/*  */}
      <App />
 
  </StrictMode>
);
