import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp"
import { AnimatePresence } from "framer-motion";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import Settings from "./pages/settings";

export default function App() {
  const location = useLocation();
  return (
    <div data-theme="mytheme" className="bg-base-300">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile/*" element={<Profile />} />
<<<<<<< HEAD
          <Route path="/profile/settings/*" element={<Settings />} />
=======
          <Route path="/SignUp/" element={<SignUp />} />
>>>>>>> 313df56788e67de66a2b1e4edf2d2a9395defc54
        </Routes>
      </AnimatePresence>
    </div>
  );
}
