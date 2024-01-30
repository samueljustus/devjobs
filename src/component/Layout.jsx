import { Outlet } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";

const Layout = () => {
  return (
    <div className="h-full w-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
