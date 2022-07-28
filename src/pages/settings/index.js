import React from "react";
import { useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Email from "./Email";
import Notifications from "./Notifications";
import Password from "./Password";
import ProfileSettings from "./ProfileSettings";

function Settings() {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, []);
  return (
    <div className="h-screen mx-2 overflow-y-hidden">
      <div className="pt-5">
        <h2 className="text-2xl font-bold my-2">Settings</h2>
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-2 h-[90vh] bg-base-200  rounded pt-10">
            <Link
              to={"/profile/settings/:id"}
              className={`flex items-center p-4 rounded-lg mx-2 hover:scale-95 hover:bg-base-100 transition-all duration-500 cursor-pointer ${
                location.pathname === "/profile/settings/:id" &&
                "bg-primary hover:bg-secondary"
              }`}
            >
              <span>Profile</span>
            </Link>
            <Link
              to={"/profile/settings/password/:id"}
              className={`flex items-center p-4 rounded-lg mx-2 hover:scale-95 hover:bg-base-100 transition-all duration-500 cursor-pointer ${
                location.pathname === "/profile/settings/password/:id" &&
                "bg-primary hover:bg-secondary"
              }`}
            >
              <span>Password</span>
            </Link>
            <Link
              to={"/profile/settings/email/:id"}
              className={`flex items-center p-4 rounded-lg mx-2 hover:scale-95 hover:bg-base-100 transition-all duration-500 cursor-pointer ${
                location.pathname === "/profile/settings/email/:id" &&
                "bg-primary hover:bg-secondary"
              }`}
            >
              <span>Email</span>
            </Link>
            <Link
              to={"/profile/settings/notifications/:id"}
              className={`flex items-center p-4 rounded-lg mx-2 hover:scale-95 hover:bg-base-100 transition-all duration-500 cursor-pointer ${
                location.pathname === "/profile/settings/notifications/:id" &&
                "bg-primary hover:bg-secondary"
              }`}
            >
              <span>Notifications</span>
            </Link>
          </div>
          <div className="col-span-5 h-[90vh] bg-base-200 w-full overflow-y-scroll rounded">
            <Routes>
              <Route path={"/:id"} element={<ProfileSettings />} />
              <Route path={"/password/:id"} element={<Password />} />
              <Route path={"/email/:id"} element={<Email />} />
              <Route path={"/notifications/:id"} element={<Notifications />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
