import React from "react";
import PageTransition from "../../components/PageTransition";

function ProfileSettings() {
  return (
    <PageTransition>
      <div>
        {" "}
        <div className="h-[170px] w-[98%] mx-5 bg-gradient-to-tr from-primary to-secondary rounded-tl-xl mt-7"></div>{" "}
        <div className="flex items-center  justify-between">
          <div className="flex items-center">
            <label tabindex="0" className="   avatar mx-10 -mt-10">
              <div className=" h- w-28 border-2 border-primary rounded-full">
                <img
                  src="https://api.lorem.space/image/face?hash=33791"
                  alt="profile-pic"
                />
              </div>
            </label>
            <div className="flex flex-col">
              <h2 className="text-2xl">Profile</h2>
              <p>Update your photo and personal details</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="btn btn-error">cancel</div>
            <div className="btn btn-success mx-3">save</div>
          </div>
        </div>
        <form>
          <div className="flex items-center justify-between mx-8 my-9">
            <span>Username</span>
            <input
              type="text"
              className="input w-1/2 bg-base-300 shadow-lg input-bordered"
            />
          </div>
          <div className="flex items-center justify-between mx-8 my-9">
            <span>bio</span>

            <textarea
              className="textarea bg-base-300 w-1/2  textarea-bordered h-[100px] "
              placeholder="Type anything..."
              name="message"
              id="message"
              maxLength={120}
            ></textarea>
          </div>
          <div className="flex items-center justify-between mx-8 my-9">
            <span>Location</span>
            <input
              type="text"
              className="input w-1/2 bg-base-300 shadow-lg input-bordered "
              placeholder="Naija"
              disabled
            />
          </div>
          {/* <div className="flex items-center justify-between mx-8 my-9">
            <span>Username</span>
            <input
              type="text"
              className="input w-1/2 bg-base-300 shadow-lg input-bordered"
            />
          </div> */}
        </form>
      </div>
    </PageTransition>
  );
}

export default ProfileSettings;
