import React from "react";
import Navbar from "../components/mainpage/NavbarMain";
import PageTransition from "../components/PageTransition";
import Post from "../components/Post";
import InputBox from "../components/mainpage/InputBox";

function MainPage() {
  return (
    <PageTransition>
      <div className="bg-base-300 min-h-screen overflow-hidden">
        <Navbar />
        <div className="grid grid-cols-9 gap-4 md:mx-5 mx-2">
          <div className="col-span-2 bg-base-100 rounded-lg  h-[90vh] sm:block hidden  mb-4 ">
            {/* placeholder*/}
            <div className="flex items-center justify-center  h-1/2 w-full">
              side1
            </div>
          </div>
          <div className=" sm:col-span-5 pb-4  col-span-9 h-[90vh]   overflow-x-hidden no-scroll">
            {/* placeholder*/}
            <div className="flex w-full">
              <InputBox />
            </div>

            <div className="flex w-full">
              <Post />
            </div>
          </div>
          {/* ..... */}
          <div className="col-span-2 sm:block hidden bg-base-100 rounded-lg h-[90vh]">
            {/* placeholder*/}
            <div className="flex items-center  justify-center h-1/2 w-full">
              side2
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default MainPage;
