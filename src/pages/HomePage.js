import React from "react";
import Hero from "../components/landingpage/Hero";
import Navbar from "../components/landingpage/Navbar";
function HomePage() {
  return (
    <div className="bg-base-100 text-slate-200  min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}

export default HomePage;
