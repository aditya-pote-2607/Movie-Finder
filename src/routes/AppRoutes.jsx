import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import Login from "../pages/LoginPage";
import SideProfile from "../pages/SideProfile";


   
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
  {
    path: "/Profile",
    element: <SideProfile/>,
  },
]);

export default router;