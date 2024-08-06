import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import { ToastContainer } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { motion } from 'framer-motion';

const Home = lazy(() => import("../Pages/Home"));
const SignUp = lazy(() => import("../Pages/SignUp"));
const UserInfo = lazy(() => import("../Pages/UserInfo"));

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw"
  },
  in: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0,
    x: "100vw"
  }
};

const pageTransition = {
  type: "tween",
  duration: 0.5
};

export const Router = () => {
  return (
    <>
      <ToastContainer />
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="/" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <Home />
            </motion.div>
          } />
          <Route path="typingtest/SignUp" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <SignUp />
            </motion.div>
          } />
          <Route path="typingtest/user" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <UserInfo />
            </motion.div>
          } />
        </Routes>
      </Suspense>
    </>
  );
}
