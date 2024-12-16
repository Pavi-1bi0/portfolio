import './App.css';
import { AppRouters } from './routers'; // Import your router configuration
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Use RouterProvider to manage routing */}
      <RouterProvider router={AppRouters} />
    </div>
  );
}

export default App;
