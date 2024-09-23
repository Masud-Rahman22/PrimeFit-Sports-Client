import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";

const MainLayouts = () => {
  return (
    <div className="overflow-x-hidden max-w-full mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;