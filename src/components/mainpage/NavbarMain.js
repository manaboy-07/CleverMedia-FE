import React from "react";
import { SearchIcon, VideoCameraIcon } from "@heroicons/react/solid";
import "typeface-pacifico";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="h-[10vh] ">
      <div className="navbar bg-base-100 px-7">
        <div className="navbar-start">
          <div className="dropdown">
            {/* <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label> */}
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost normal-case text-xl"
            style={{ fontFamily: "pacifico" }}
          >
            CleverMedia
          </Link>
        </div>
        <div className=" flex bg-slate-700 rounded-lg px-2 w-full">
          <SearchIcon className="w-7" />
          <input
            type="text"
            placeholder="Search"
            className="input bg-transparent outline-none focus:outline-none w-full"
          />
        </div>
        <div className="navbar-end">
          <div className="p-1 btn btn-ghost btn-circle">
            <VideoCameraIcon className="w-7" />
          </div>
          <div className="dropdown dropdown-end">
            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul
              tabindex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
