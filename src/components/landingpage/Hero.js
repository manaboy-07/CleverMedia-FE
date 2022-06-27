import React from "react";
import social from "../../images/connected.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-evenly space-y-6 my-12 p-5  md:flex-row h-full relative">
      <div className="absolute z-[1] opacity-25  lg:left-2/3 lg:rotate-180 lg:top-20 rotate-45 ">
        <svg
          width="1000"
          height="1000"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="shape">
              <path
                fill="currentColor"
                d="M801,635Q656,770,462,836Q268,902,220,701Q172,500,231.5,319Q291,138,481.5,170Q672,202,809,351Q946,500,801,635Z"
              ></path>
            </clipPath>
          </defs>

          <g clip-path="url(#shape)">
            <path
              fill="#36d399"
              d="M801,635Q656,770,462,836Q268,902,220,701Q172,500,231.5,319Q291,138,481.5,170Q672,202,809,351Q946,500,801,635Z"
            />
          </g>
        </svg>
      </div>
      <div className="relative z-10">
        <div className="absolute z-[1] opacity-25 bottom-10 right-12   lg:block hidden">
          <svg
            width="1000"
            height="1000"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="shape">
                <path
                  fill="currentColor"
                  d="M801,635Q656,770,462,836Q268,902,220,701Q172,500,231.5,319Q291,138,481.5,170Q672,202,809,351Q946,500,801,635Z"
                ></path>
              </clipPath>
            </defs>

            <g clip-path="url(#shape)">
              <path
                fill="#36d399"
                d="M801,635Q656,770,462,836Q268,902,220,701Q172,500,231.5,319Q291,138,481.5,170Q672,202,809,351Q946,500,801,635Z"
              />
            </g>
          </svg>
        </div>
        <h2 className="text-success text-2xl">New Platform</h2>
        <h1 className="font-bold lg:text-6xl md:text-4xl text-2xl">
          Your next <p> social life . </p>
        </h1>
        <h3 className="md:text-xl text-lg my-5">
          Your new social media platform
          <br />
          <span>with stuff that actually matters!!!</span>
        </h3>
        <div className="h-fit flex">
          {" "}
          <Link
            to={"/main"}
            className="text-xl text-info bg-base-100 outline-info border-4 border-info  p-3  rounded-lg transition-all hover:bg-info hover:text-base-100 font-bold h-full"
          >
            Get started
          </Link>
        </div>
      </div>
      <div className="mx-22 h-fit p-10 z-10">
        <img src={social} alt="social" className="z-20 lg:h-full h-[300px]" />
      </div>
    </div>
  );
};

export default Hero;
