import React from "react";
import social from "../../images/connected.svg";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-evenly space-y-6 my-12 p-5  md:flex-row">
      <div>
        <h2 className="text-success text-2xl">New Platform</h2>
        <h1 className="font-bold text-6xl">
          Your next <p> social life . </p>
        </h1>
        <h3 className="text-xl my-12">
          Your new social media platform{" "}
          <p>with stuff that actually matters!!!</p>
        </h3>
        <button className="text-xl text-info bg-base-100 outline-info border-4 border-info  p-3  rounded-lg transition-all hover:bg-info hover:text-base-100 font-bold">
          Get started
        </button>
      </div>
      <div className="mx-22">
        <img src={social} alt="image" className="z-20" />
      </div>
    </div>
  );
};

export default Hero;
