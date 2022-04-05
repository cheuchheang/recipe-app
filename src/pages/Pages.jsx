import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const Cuisine = lazy(() => import("./Cuisine"));

const Pages = () => {
  return (

      <Suspense fallback={<div>Loading... </div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
        </Routes>
      </Suspense>

  );
};

export default Pages;
