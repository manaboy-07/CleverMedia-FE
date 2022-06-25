import React from "react";
import Navbar from "../components/mainpage/NavbarMain";

function MainPage() {
  return (
    <div className="bg-base-300 min-h-screen overflow-hidden">
      <Navbar />
      <div className="grid grid-cols-9 gap-2 md:mx-0 mx-2">
        <div className="md:col-span-1 md:block hidden"></div>
        <div className="col-span-2 bg-base-100 rounded-lg  h-[90vh]">
          {/* placeholder*/}
          <div className="flex items-center justify-center  h-1/2 w-full">
            side1
          </div>
        </div>
        <div className="md:col-span-3 col-span-5 h-[90vh]">
          {/* placeholder*/}
          <div className="flex items-center justify-center h-1/2">main</div>
        </div>
        {/* ..... */}
        <div className="col-span-2 bg-base-100 rounded-lg h-[90vh]">
          {/* placeholder*/}
          <div className="flex items-center  justify-center h-1/2 w-full">
            side2
          </div>
        </div>
        <div className="md:col-span-1 md:block hidden"></div>
      </div>
    </div>
  );
}

export default MainPage;
