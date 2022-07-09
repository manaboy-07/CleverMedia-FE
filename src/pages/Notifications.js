import React from "react";

export default function Notify(){
    return(
        <div>
              <div className="flex justify-between" >
         <div className="text-xl mr-10">Notifications</div>  
         <div>see all </div>
         </div> 
         <hr className="mt-3"/>
         <div className="mt-3">
            <img className="w-9 mr-2 rounded-full inline"src="https://api.lorem.space/image/face?hash=33791" />
            Xpan <span className="text-sm"> - Commented on your post</span>
            </div>
        </div>
      
    )
}