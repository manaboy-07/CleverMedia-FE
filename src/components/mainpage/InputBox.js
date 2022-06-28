import React from "react";
import { useState } from "react";
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
function InputBox() {
  const [input, setInput] = useState("");
  return (
    <div className="flex space-x-2 p-5 shadow-lg mb-5 rounded-2xl w-full bg-base-100">
      {/* <img
      className="h-14 w-14 rounded-full object-cover "
      src="https://links.papareact.com/gll"
      alt=""
    /> */}
      <label tabindex="0" className="btn btn-ghost btn-circle avatar">
        <div className=" h-14 w-14 rounded-full">
          <img
            src="https://api.lorem.space/image/face?hash=33791"
            alt="profile-pic"
          />
        </div>
      </label>
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="what's Happening?"
            className=" input w-full text-xl outline-none placeholder:text-xl"
          />
          <div className="flex items-center my-3">
            <div className="flex flex-1 space-x-2 text-primary">
              <PhotographIcon className="h-7 w-7 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <SearchCircleIcon className="h-7 w-7 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <EmojiHappyIcon className="h-7 w-7 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <CalendarIcon className="h-7 w-7 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <LocationMarkerIcon className="h-7 w-7 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
            </div>
            <button
              type="button"
              disabled={!input}
              className=" btn btn-primary  font-bold text-white hover:brightness-110 disabled:shadow-2xl"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InputBox;
