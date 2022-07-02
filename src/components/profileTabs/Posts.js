import React from "react";
import { useLocation, useParams } from "react-router-dom";
import PageTransition from "../PageTransition";
import Post from "../Post";

function Posts() {
  const location = useLocation();
  let { id } = useParams();
  console.log(id, location);
  if (!id) {
    return (
      <div className="flex w-full items-center justify-center h-full">
        <h2 className="text-error">Something went wrong, Page not found</h2>
      </div>
    );
  }
  return (
    <PageTransition>
      <div className="p-2 mx-4">
        <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </PageTransition>
  );
}

export default Posts;
