import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import { Home, Login } from "@mui/icons-material";
import Products from "../pages/Products";
import AboutUs from "../pages/AboutUs";
import Register from "../pages/Register";

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
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;