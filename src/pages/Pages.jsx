import React, { Suspense, lazy } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
const Home = lazy(() => import("./Home"));
const Cuisine = lazy(() => import("./Cuisine"));

const Pages = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading... </div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine" element={<Cuisine />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Pages;
