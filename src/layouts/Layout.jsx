import React from "react";
import GlobalFooterComponents from "../components/GlobalFooterComponents";
import GlobalNavbarComponent from "../components/GlobalNavbarComponents";
import HomePage from "../Pages/HomePage";
import { Outlet } from "react-router-dom";
import NavbarScroll from "../components/navbarScroll";

function Layout(props) {
  return (
    <div>
      <GlobalNavbarComponent />
      <Outlet />
      <GlobalFooterComponents />
    </div>
  );
}

export default Layout;
