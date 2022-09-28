import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GitHub from "./Github";
import "./Github.css";
import MoreInfo from "./MoreInfo";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <BrowserRouter>
  <Routes>
      <Route path="/:user/:repo" element={<MoreInfo />}/>
      <Route path="/" element={<GitHub />} />
    </Routes>
    </BrowserRouter>
  </>
);
