import React from "react";
import Navbar from "../components/mainpage/Navbar";

function MainPage() {
  return (
    <div className="bg-base-300 min-h-screen overflow-hidden">
      <Navbar />
      <div className="grid grid-cols-9">
        <div className="col-span-1"></div>
        <div className="col-span-2 border-2 h-[90vh]">
          {/* placeholder*/}
          <div className="flex items-center justify-center h-1/2">side1</div>
        </div>
        <div className="col-span-3 border-2 h-[90vh]">
          {/* placeholder*/}
          <div className="flex items-center justify-center h-1/2">main</div>
        </div>
        {/* ..... */}
        <div className="col-span-2 border-2 h-[90vh]">
          {/* placeholder*/}
          <div className="flex items-center justify-center h-1/2">side2</div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}

export default MainPage;
