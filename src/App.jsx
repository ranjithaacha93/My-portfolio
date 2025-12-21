import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Nav from "./NavBar/Nav";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Skill from "./page/Skill/Skill";
import Project from "./page/Project/Project";
import Contact from "./page/Contact/Contact";

const pageVariants = {
  initial: {
    x: "40%",
    opacity: 0
  },
  animate: {
    x: "0%",
    opacity: 1
  },
  exit: {
    x: "-30%",
    opacity: 0
  }
};

const pageTransition = {
  duration: 0.45,
  ease: [0.25, 0.8, 0.25, 1] 
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />

        <Route
          path="/about"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <About />
            </motion.div>
          }
        />

        <Route
          path="/skill"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Skill />
            </motion.div>
          }
        />

        <Route
          path="/project"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Project />
            </motion.div>
          }
        />

        <Route
          path="/contact"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [Show, setShow] = useState(false);

  return (
    <BrowserRouter>
      <Nav show={Show} setshow={setShow} />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
