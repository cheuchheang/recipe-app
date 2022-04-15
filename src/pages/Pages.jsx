import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Searched from "./Searched";

const Home = lazy(() => import("./Home"));
const Cuisine = lazy(() => import("./Cuisine"));

const Pages = () => {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
      </Routes>
    </Suspense>
  );
};

export default Pages;
