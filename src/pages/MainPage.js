import React from "react";
import Navbar from "../components/mainpage/NavbarMain";
import PageTransition from "../components/PageTransition";
import Post from "../components/Post";

function MainPage() {
  return (
    <PageTransition>
      <div className="bg-base-300 min-h-screen overflow-hidden">
        <Navbar />
        <div className="grid grid-cols-9 gap-2 md:mx-0 mx-2">
          <div className="md:col-span-1 lg:block hidden"></div>
          <div className="col-span-2 bg-base-100 rounded-lg  h-[90vh] sm:block hidden  ">
            {/* placeholder*/}
            <div className="flex items-center justify-center  h-1/2 w-full">
              side1
            </div>
          </div>
          <div className="lg:col-span-3 sm:col-span-5 col-span-9 h-[90vh]">
            {/* placeholder*/}
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
          <div className="md:col-span-1 lg:block hidden"></div>
        </div>
      </div>
    </PageTransition>
  );
}

export default MainPage;
