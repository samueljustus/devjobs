import { Outlet } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import JobCategories from "./JobCategories.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

const Layout = () => {
  return (
    <div className="h-full w-screen">
      <ScrollToTop />
      <Header />
      <Outlet />
      <JobCategories />
      <Footer />
    </div>
  );
};

export default Layout;
