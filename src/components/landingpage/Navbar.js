import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import "typeface-pacifico";

const Navbar = () => {
  return (
    <div>
      <div className="navbar px-2 bg-base-100 md:z-0 z-20">
        <div className="navbar-start  flex ">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li tabIndex="0">
                <a href="#" className="justify-between">
                  Social
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a href="#">Submenu 1</a>
                  </li>
                  <li>
                    <a href="#">Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost normal-case text-3xl text-success"
            style={{ fontFamily: "pacifico" }}
          >
            Clever Media
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a href="#">Home</a>
            </li>
            <li tabIndex="0">
              <a href="#">
                Social
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a href="#">Submenu 1</a>
                </li>
                <li>
                  <a href="#">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="#" className="btn text-success rounded-md">
            <Link to={"/SignUp"}>Sign Up</Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
