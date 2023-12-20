import React from "react";
import Home from "../Pages/HomePage.jsx";
import Aboutus from "../Pages/AboutUsPage.jsx";
import HomePage from "../Pages/HomePage.jsx";
import AboutUsPage from "../Pages/AboutUsPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layouts/layout.jsx";

function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="aboutus" element={<AboutUsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default index;
