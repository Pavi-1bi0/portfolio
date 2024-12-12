
import './App.css'
import { AppRouters } from './routers'
import { RouterProvider } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <RouterProvider router={AppRouters} />
      

    </>
  )
}

export default App
