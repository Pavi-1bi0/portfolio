import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import { AppRouters } from './routers'; // Import your routers here

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={AppRouters} />  {/* Use RouterProvider here */}
  </StrictMode>
);
