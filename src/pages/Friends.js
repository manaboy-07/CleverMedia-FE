import React from "react";
import {
   
    TrashIcon
  } from "@heroicons/react/solid";

export default function Friends(){
    return(
        <div>
            <div className="flex justify-between mt-3">
                    <div>
                    <img className="w-9 mr-2 rounded-full inline"src="https://api.lorem.space/image/face?hash=33791" />
                    Manasseh</div>
                    
                  <div className="mt-2">Delete Friend <TrashIcon className="lg:w-6 w-4 inline"/></div>
              </div>
              
        </div>
    )
}