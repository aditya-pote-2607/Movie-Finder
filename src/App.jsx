import { RouterProvider } from 'react-router-dom'
import router from './routes/AppRoutes.jsx'
import ContextAppProvider from '../../data/context/appContext.jsx'


function App() {
  return (
    // <ContextAppProvider>
      <RouterProvider router={router} />
    // </ContextAppProvider>
  )
}

export default App
