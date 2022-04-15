import React, { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Recipe from "./Recipe";
import Searched from "./Searched";
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("./Home"));
const Cuisine = lazy(() => import("./Cuisine"));

const Pages = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading... </div>}>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default Pages;
