import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import { Home, Login } from "@mui/icons-material";
import AboutUs from "../pages/AboutUs";
import AllProducts from "../pages/AllProducts";
import Cart from "../pages/Cart";
import ManageProducts from "../pages/ManageProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>
      },
      {
        path: "/manage-products",
        element: <ManageProducts></ManageProducts>
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  // {
  //   path: "/register",
  //   element: <Register></Register>,
  // },
]);

export default router;