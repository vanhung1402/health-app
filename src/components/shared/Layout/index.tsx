import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import BackToTopButton from "../BackToTopButton";

const Layout = () => {
  return (
    <>
      <Header />
      <main><Outlet /></main>
      <BackToTopButton />
      <Footer />
    </>
  );
};

export default Layout;
