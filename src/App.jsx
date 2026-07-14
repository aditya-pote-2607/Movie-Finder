import { RouterProvider } from 'react-router-dom'
import router from './routes/AppRoutes.jsx'


function App() {
  return (
    // <ContextAppProvider>
      <RouterProvider router={router} />
    //  {/* </ContextAppProvider> */}
  )
}

export default App
