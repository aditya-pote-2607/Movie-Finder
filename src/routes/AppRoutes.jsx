import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import Login from "../pages/LoginPage";


   
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie",
    element: <SearchPage />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

export default router;