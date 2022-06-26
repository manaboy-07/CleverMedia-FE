import React from "react";
import {
  DotsHorizontalIcon,
  HeartIcon,
  BookmarkIcon,
} from "@heroicons/react/solid";
import {
  ChatIcon,
  ShareIcon,
  HeartIcon as HeartIconOut,
  BookmarkIcon as BookmarkIconOut,
} from "@heroicons/react/outline";
import testImage from "../designs/mainpage.png";
import { useState } from "react";
function Post() {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <div className="w-full">
      <div className="rounded-lg bg-base-100 shadow-md h-fit">
        <div className="flex items-center justify-between p-2 w-full">
          <div className="flex items-center">
            {" "}
            <label
              tabindex="0"
              className="btn btn-ghost btn-circle avatar mx-2"
            >
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>{" "}
            <div>
              <h2>Jay</h2>
              <p>New york city</p>
            </div>
          </div>
          <div className="btn btn-ghost btn-circle">
            <DotsHorizontalIcon className="w-5 text-base-content " />
          </div>
        </div>
        <div className="h-full p-2">
          <img
            src={testImage}
            alt=""
            height={"100%"}
            width={"100%"}
            className="rounded-lg"
          />
        </div>
        <div className="flex px-2 justify-between my-1">
          <div>
            <div
              className="btn btn-ghost btn-circle"
              onClick={() => setLiked(!liked)}
            >
              {liked ? (
                <HeartIcon className="w-7 text-red-500" />
              ) : (
                <HeartIconOut className="w-7 " />
              )}
            </div>
            <div className="btn btn-ghost btn-circle">
              <ChatIcon className="w-7" />
            </div>
            <div className="btn btn-ghost btn-circle">
              <ShareIcon className="w-7" />
            </div>
          </div>
          <div
            className="btn btn-ghost btn-circle"
            onClick={() => setBookmarked(!bookmarked)}
          >
            {bookmarked ? (
              <BookmarkIcon className="w-7 text-primary" />
            ) : (
              <BookmarkIconOut className="w-7" />
            )}
          </div>
        </div>
        <div className="p-2">
          <p>
            Liked by <span className="font-bold">Manasseh</span> and{" "}
            <span className="font-bold">1,000 others</span>
          </p>
        </div>
        <div className="p-2">
          <p>
            <span className="font-bold">Manasseh</span> I'm addicted to drugs
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
