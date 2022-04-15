import React from "react";
import { motion } from "framer-motion";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";

const Home = () => (
  <motion.div
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div>
      <Veggie />
    </div>
    <div>
      <Popular />
    </div>
  </motion.div>
);

export default Home;
