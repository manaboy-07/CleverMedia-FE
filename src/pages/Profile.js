import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Posts from "../components/profileTabs/Posts";
import Navbar from "./../components/mainpage/NavbarMain";
import Tags from "./../components/profileTabs/Tags";

function Profile() {
  const locaton = useLocation();

  return (
    <div className="bg-base-300 min-h-screen overflow-hidden">
      <Navbar />

      <div className="flex items-center justify-center w-full">
        {" "}
        <label tabindex="0" className="   avatar my-7">
          <div className=" h- w-28 border-2 border-primary rounded-full">
            <img
              src="https://api.lorem.space/image/face?hash=33791"
              alt="profile-pic"
            />
          </div>
        </label>
      </div>
      <div className="flex items-center w-full flex-wrap justify-evenly px-2">
        <div className="flex flex-col items-center bg-primary py-10 px-16 my-2  rounded-lg shadow-lg">
          <span>Posts</span>
          <span>10k</span>
        </div>
        <div className="flex flex-col items-center bg-primary py-10 px-16 my-2  rounded-lg shadow-lg">
          <span>Followers</span>
          <span>10k</span>
        </div>
        <div className="flex flex-col items-center bg-primary py-10 px-16 my-2  rounded-lg shadow-lg">
          <span>Tags</span>
          <span>10k</span>
        </div>
      </div>
      <div className="flex w-full justify-center items-center py-10">
        {" "}
        <div className="tabs">
          <Link
            to={"/profile/:id"}
            className={`tab tab-lifted ${
              locaton.pathname === "/profile/:id" && "tab-active"
            }`}
          >
            Posts
          </Link>
          {/* <Link to={"/"} className="tab tab-lifted tab-active">Tab 2</Link> */}
          <Link
            to={"/profile/tags/:id"}
            className={`tab tab-lifted ${
              locaton.pathname === "/profile/tags/:id" && "tab-active"
            }`}
          >
            Tags
          </Link>
        </div>
      </div>

      <Routes>
        <Route path={"/:id"} element={<Posts />} />
        <Route path={"/tags/:id"} element={<Tags />} />
      </Routes>
    </div>
  );
}

export default Profile;
