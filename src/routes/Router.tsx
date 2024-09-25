import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import AboutUs from "../pages/AboutUs";
import AllProducts from "../pages/AllProducts";
import Cart from "../pages/Cart";
import ManageProducts from "../pages/ManageProducts";
import Home from "../pages/Home";
import SingleProduct from "../pages/SingleProduct";

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
      },
      {
        path: "/products/:id",
        element: <SingleProduct></SingleProduct>, 
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login></Login>,
  // },
  // {
  //   path: "/register",
  //   element: <Register></Register>,
  // },
]);

export default router;