import React from "react";
import "../index.css";
import HomeSection from "../components/HomeSection";
import CaroouselAnimation1 from "../components/CaroouselAnimation1";

function HomePage() {
  return (
    <div className="Homepage">
      <div className="container">
        <HomeSection />
      </div>
      <CaroouselAnimation1 />
    </div>
  );
}

export default HomePage;
