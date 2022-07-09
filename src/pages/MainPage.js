import React from "react";
import Navbar from "../components/mainpage/NavbarMain";
import PageTransition from "../components/PageTransition";
import Post from "../components/Post";
import InputBox from "../components/mainpage/InputBox";
import {
  PlusCircleIcon,

} from "@heroicons/react/solid";
import Notify from "./Notifications";
import Friends from "./Friends";

function MainPage() {
  return (
    <PageTransition>
      <div className="bg-base-300 min-h-screen overflow-hidden">
        <Navbar />

        <div className="grid grid-cols-9 gap-2 md:mx-0 mx-2">
          <div className="md:col-span-1 lg:block hidden"></div>
          <div className="col-span-2 bg-base-100 rounded-lg  h-[90vh] sm:block hidden  ">
            <Notify/>

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
             <div className="flex justify-between" >
                <div className="text-xl mr-10">Friend List</div>  
                <div>Add more <PlusCircleIcon className="lg:w-7 w-5 inline cursor-pointer"/> </div>
              </div> 
              <hr className="mt-4"/>
              <div className="my-3">
                <Friends/>
                </div> 
          </div>

          
          <div className="md:col-span-1 lg:block hidden"></div>

        </div>
      </div>
    </PageTransition>
  );
}

export default MainPage;
