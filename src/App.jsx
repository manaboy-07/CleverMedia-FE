import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <div data-theme="mytheme" className="bg-base-300">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </div>
  );
}
