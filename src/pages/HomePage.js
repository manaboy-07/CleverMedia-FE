import React from "react";
import Hero from "../components/landingpage/Hero";
import Navbar from "../components/landingpage/Navbar";
import PageTransition from "../components/PageTransition";
function HomePage() {
  return (
    <PageTransition>
      <div className="bg-base-100 text-slate-200  min-h-screen cus-hero overflow-hidden">
        <div className="z-20 h-[10vh]">
          <Navbar />
        </div>
        <div className="h-[69vh]">
          <Hero />
        </div>
      </div>
    </PageTransition>
  );
}

export default HomePage;
