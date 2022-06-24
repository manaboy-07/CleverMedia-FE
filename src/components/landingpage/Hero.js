import React from "react";
import social from "../../images/connected.svg";

const Hero = () => {
  return (
    <div className="flex flex-row items-center justify-evenly space-y-6 my-12 p-5 ml-32 md:flex-column-reverse">
      <div>
        <h2 className="text-success text-2xl">New Platform</h2>
        <h1 className="font-bold text-6xl">
          Your next <p> social life . </p>
        </h1>
        <h3 className="text-xl my-12">
          Your new social media platform{" "}
          <p>with stuff that actually matters!!!</p>
        </h3>
        <button className="text-xl text-info bg-base-100 outline-info border-4 border-info  p-3 ">
          Get started
        </button>
      </div>
      <div className="mx-22">
        <img src={social} alt="smth" className="z-20" />
      </div>
    </div>
  );
};

export default Hero;
